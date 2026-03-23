"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cardBG from "../../../public/grid-ellipsis.svg";
const LEETCODE_URL = "https://leetcode.com/u/devansh_dubey/";

type LeetCodeStats = {
  data: {
    allQuestionsCount: { count: number }[];
    matchedUser: {
      submitStats: {
        acSubmissionNum: { count: number }[];
      };
    };
    userContestRanking: {
      attendedContestsCount: number;
      globalRanking: number;
      topPercentage: number;
      rating: number;
    };
  };
};

function DSA() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

useEffect(() => {
  const cached = localStorage.getItem("leetcodeStats");
  const cachedTime = localStorage.getItem("leetcodeStatsTime");

  const oneHour = 60 * 60 * 1000;

  if (
    cached &&
    cachedTime &&
    Date.now() - Number(cachedTime) < oneHour
  ) {
    setStats(JSON.parse(cached));
    return;
  }

  fetch("/api/leetcode")
    .then((res) => res.json())
    .then((data) => {
      setStats(data);
      localStorage.setItem("leetcodeStats", JSON.stringify(data));
      localStorage.setItem("leetcodeStatsTime", Date.now().toString()); // ✅ fix
    });
}, []);

  const data = stats
  ? {
      total: stats.data.allQuestionsCount?.[0]?.count,
      easy: stats.data.allQuestionsCount?.[1]?.count,
      medium: stats.data.allQuestionsCount?.[2]?.count,
      hard: stats.data.allQuestionsCount?.[3]?.count,
      completed:
        stats.data.matchedUser.submitStats.acSubmissionNum?.[0]?.count,
      levels: {
        easy: stats.data.matchedUser.submitStats.acSubmissionNum?.[1]?.count,
        medium: stats.data.matchedUser.submitStats.acSubmissionNum?.[2]?.count,
        hard: stats.data.matchedUser.submitStats.acSubmissionNum?.[3]?.count,
      },
      contest: {
        total: stats.data.userContestRanking?.attendedContestsCount,
        ranking: stats.data.userContestRanking?.globalRanking,
        place: stats.data.userContestRanking?.topPercentage,
        rating: stats.data.userContestRanking?.rating,
      },
    }
  : null;

  const solved = data?.completed || 0;
  const total = data?.total || 1;

  const percentage = Math.floor((solved / total) * 100);

  return (
    <>

      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative md:w-1/2 w-[90%] mx-auto rounded-3xl p-[1px] overflow-hidden">

        {/* 🔥 rotating border */}
        <div className="absolute inset-0 rotating-border opacity-40"></div>

        {/* 💎 card */}
        <div className="relative rounded-3xl 
          bg-[#0b0f1a]/80 backdrop-blur-xl 
          border border-white/10 
          px-6 md:px-10 py-10
        ">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-semibold text-white tracking-wide 
              drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
              LeetCode Stats
            </h2>

            <button
              onClick={() => window.open(LEETCODE_URL, "_blank")}
              className="text-sm px-4 py-2 rounded-full 
              bg-gradient-to-r from-yellow-400 to-orange-500 
              text-black font-semibold 
              hover:scale-105 transition"
            >
              View Profile
            </button>
          </div>

          {/* MAIN */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* 🔵 CIRCULAR PROGRESS */}
            <div className="relative w-48 h-48 flex items-center justify-center">

              {/* glow */}
              <div className="absolute inset-0 rounded-full 
                bg-gradient-to-tr from-purple-500 to-blue-500 
                blur-2xl opacity-30" />

              <svg className="w-48 h-48 rotate-[-90deg]">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="url(#grad)"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 80}
                  strokeDashoffset={
                    2 * Math.PI * 80 * (1 - percentage / 100)
                  }
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute text-center">
                <p className="text-3xl font-bold text-green-400">
                  {solved}/{total}
                </p>
                <p className="text-gray-400 text-sm">Solved</p>
              </div>
            </div>

            {/* 📊 DIFFICULTY CARDS */}
            <div className="flex flex-col gap-4 w-full md:w-[60%]">
              {[
                {
                  label: "Easy",
                  value: data?.levels.easy,
                  total: data?.easy,
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  label: "Medium",
                  value: data?.levels.medium,
                  total: data?.medium,
                  color: "from-orange-400 to-yellow-400",
                },
                {
                  label: "Hard",
                  value: data?.levels.hard,
                  total: data?.hard,
                  color: "from-red-400 to-pink-500",
                },
              ].map((item) => {
                const percent = Math.floor(
                  ((item.value || 0) / (item.total || 1)) * 100
                );

                return (
                  <div
                    key={item.label}
                    className="relative rounded-xl overflow-hidden group"
                  >
                    {/* progress bg */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10`}
                    ></div>

                    {/* progress fill */}
                    <div
                      style={{ width: `${percent}%` }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} opacity-30 transition-all duration-700`}
                    ></div>

                    {/* content */}
                    <div className="relative flex justify-between items-center px-5 py-4 
                      border border-white/10 rounded-xl backdrop-blur-md">
                      <span className="text-white font-medium">
                        {item.label}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {item.value}/{item.total}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />

          {/* CONTEST */}
          <h3 className="text-center text-lg font-semibold mb-6 
            bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Contest Stats
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Contests", value: data?.contest.total },
              {
                title: "Rating",
                value: Math.floor(data?.contest.rating || 0),
              },
              { title: "Top %", value: data?.contest.place },
            ].map((item) => (
              <div key={item.title} className="group relative rounded-xl">

                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

                {/* card */}
                <div className="relative rounded-xl bg-white/5 backdrop-blur-md 
                  border border-white/10 px-6 py-6 text-center 
                  transition group-hover:scale-[1.05]">
                  
                  <p className="text-sm text-gray-400">{item.title}</p>
                  <p className="text-xl font-bold text-white mt-2">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
      

      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative md:w-1/2 w-[90%] mx-auto rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent">
          <div
            style={{ backgroundImage: `url(${cardBG.src})` }}
            className="size-full bg-repeat bg-[length:25px_25px]"
          >
            <div className="size-full rounded-3xl bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
             
              <div className="rounded-3xl  border border-white/10 px-6 md:px-10 py-10">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-xl font-semibold text-white tracking-wide">
                    Leetcode Stats
                  </h2>

                  <button
                    onClick={() => window.open(LEETCODE_URL, "_blank")}
                    className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:scale-105 transition"
                  >
                    View Profile
                  </button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 blur-2xl opacity-30" />

                    <div className="relative w-48 h-48 rounded-full border-[6px] border-white/10 flex flex-col items-center justify-center text-center">
                      <div className="relative w-48 h-48 flex items-center justify-center rounded-full"> 

                     
                      <p className="text-3xl font-bold text-green-400">
                        {data?.completed}/{data?.total}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Questions Solved
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    {[
                      {
                        label: "Easy",
                        value: data?.levels.easy,
                        total: data?.easy,
                        color: "text-blue-400",
                      },
                      {
                        label: "Medium",
                        value: data?.levels.medium,
                        total: data?.medium,
                        color: "text-orange-400",
                      },
                      {
                        label: "Hard",
                        value: data?.levels.hard,
                        total: data?.hard,
                        color: "text-red-400",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-white/5 border border-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl flex justify-between items-center hover:scale-[1.02] transition"
                      >
                        <span className={`font-medium pr-8 ${item.color}`}>
                          {item.label}
                        </span>
                        <span className="text-white font-semibold">
                          {item.value} / {item.total}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />

                <h3 className="text-center text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Contest History
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Total Contests", value: data?.contest.total },
                    {
                      title: "Max Rating",
                      value: Math.floor(data?.contest.rating || 0),
                    },
                    { title: "Top %", value: data?.contest.place },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="relative rounded-2xl group"
                    >
                     

                      <div className="relative rounded-2xl bg-[#111827]/70 backdrop-blur-md border border-white/10 px-6 py-6 text-center transition duration-300 group-hover:scale-[1.03]">
                        <p className="text-sm text-gray-400">{item.title}</p>
                        <p className="text-xl font-bold text-white mt-2">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> 
        </div>
      </motion.div> */}
    </>
  );
}

export default DSA;
