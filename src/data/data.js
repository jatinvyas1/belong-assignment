import personImage from "./person.jpg";

const programData = [
  {
    name: "Market Research",
    video: personImage,
    information: [
      `DHL Global Forwarding (DGF) is the freight forwarding Division of Deutsche Post DHL providing air
        and ocean freight forwarding services. It also plans and undertakes major logistics projects under
        the brand name DHL Industrial Projects.`,
      `Digitalization is at the heart of business intelligence, infrastructure and customer visibility. Our
        approach to innovation and development is customer centric and we believe it will prove to be the
        force behind the retention of our reputation of a logistics leader.`,
    ],
    task: [
      `You are required to do some market research and list down the key challenges logistics companies
    face. You can go ahead and do extensive research through various mediums but summarise key
    points for the task.`,
      [
        `Please create a presentation that lists and explains at least 5 challenges.
    Support your research with examples and references.`,
        `Keep the brief of each challenge between 100-150 words only hence put down a concise analysis of
    your research.`,
      ],
    ],
    resources: [
      `White Paper: Change at the Speed of the Consumer: How E-Commerce is Accelerating Logistics
            Innovations`,
      //   images: [img1, img2, img3],
    ],
    submitted: false,
    inProgress: true,
  },
  {
    name: "Solution Assessment",
    video: personImage,
    information: [
      `DHL Global Forwarding (DGF) is the freight forwarding Division of Deutsche Post DHL providing air
        and ocean freight forwarding services. It also plans and undertakes major logistics projects under
        the brand name DHL Industrial Projects.
        Digitalization is at the heart of business intelligence, infrastructure and customer visibility. Our
        approach to innovation and development is customer centric and we believe it will prove to be the
        force behind the retention of our reputation of a logistics leader.`,
    ],
    task: [
      `You are required to do some market research and list down the key challenges logistics companies
    face. You can go ahead and do extensive research through various mediums but summarise key
    points for the task.`,
      [
        `Please create a presentation that lists and explains at least 5 challenges.
    Support your research with examples and references.`,
        `Keep the brief of each challenge between 100-150 words only hence put down a concise analysis of
    your research.`,
      ],
    ],
    resources: [
      `White Paper: Change at the Speed of the Consumer: How E-Commerce is Accelerating Logistics
            Innovations`,
    ],
    submitted: false,
    inProgress: false,
  },
  { name: "Oppertunity Evaluation", inProgress: false, submitted: false },
  { name: "Future Readiness", inProgress: false, submitted: false },
];

export default programData;
