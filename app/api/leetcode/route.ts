export async function GET() {
      const query = `
   query getUserProfile {
  matchedUser(username: "devansh_dubey") {
    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }

  userContestRanking(username: "devansh_dubey") {
    rating
    globalRanking
    attendedContestsCount
    topPercentage
  }
    allQuestionsCount {
    difficulty
    count
  }
}

  `;

      try {
            const response = await fetch("https://leetcode.com/graphql", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ query }),
                  next: { revalidate: 3600 }, // ✅ cache for 1 hour
            });

            const data = await response.json();

            return Response.json(data);
      } catch (error) {
            return Response.json({ error: "Failed to fetch data" }, { status: 500 });
      }
}
