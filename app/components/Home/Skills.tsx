import { skills } from "../../../lib/skillsData";
import { CardBody, CardWithGridEllipsis } from "../ui/skillsBg";

function Skills() {
  return (
    <>
    
      <div className=" w-[80%] md:w-1/2 mx-auto text-left">
        {skills.map((skillItem) => (
          <div key={skillItem.id}>
            <p className="pb-6 pt-6 text-white font-semibold">
              {skillItem.skill}
            </p>

            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {skillItem.tech.map((tech) => (
                <div className="group relative h-32" key={tech.id}>
             

                  <CardWithGridEllipsis>
                    <CardBody icon={tech.logo} title={tech.name}>
                    </CardBody>
                  </CardWithGridEllipsis>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
