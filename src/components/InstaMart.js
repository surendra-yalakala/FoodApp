import { useState } from "react";
import { INSTA_MART_TITLES } from "../utils/constants";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-2 border border-gray-300">
      <h1 className="p-2 font-semibold text-sm">{title}</h1>
      <button
        className="p-2 cursor-pointer text-xs font-sans underline"
        onClick={() => setIsVisible(isVisible ? "" : title)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p className="px-2 text-xs">{desc}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [sectionConfig, setSectionConfig] = useState("");
  return (
    <div>
      <h1 className="font-bold p-2 m-2">Insta mart</h1>
      <Section
        title={INSTA_MART_TITLES.about}
        desc={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "
        }
        isVisible={sectionConfig === INSTA_MART_TITLES.about}
        setIsVisible={(value) => setSectionConfig(value)}
      />
      <Section
        title={INSTA_MART_TITLES.team}
        desc={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={sectionConfig === INSTA_MART_TITLES.team}
        setIsVisible={(value) => setSectionConfig(value)}
      />
      <Section
        title={INSTA_MART_TITLES.career}
        desc={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={sectionConfig === INSTA_MART_TITLES.career}
        setIsVisible={(value) => setSectionConfig(value)}
      />
    </div>
  );
};

export default InstaMart;
