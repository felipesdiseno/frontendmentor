import React from "react";

const content = [
  {
    id: 1,
    img: "testimonialGrid/image-daniel.jpg",
    editor: "Daniel Clifford",
    rol: "Verified Graduate",
    title:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    text: "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup.",
  },
  {
    id: 2,
    img: "testimonialGrid/image-jonathan.jpg",
    editor: "Jonathan Walters",
    rol: "Verified Graduate",
    title: "The team was very supportive and kept me motivated",
    text: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself.",
  },
  {
    id: 3,
    img: "testimonialGrid/image-kira.jpg",
    editor: "Kira Whittle",
    rol: "Verified Graduate",
    title: "Such a life-changing experience. Highly recommended!",
    text: "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
  },
  {
    id: 4,
    img: "testimonialGrid/image-jeanette.jpg",
    editor: "Jeanette Harmon",
    rol: "Verified Graduate",
    title: "An overall wonderful and rewarding experience",
    text: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  },
  {
    id: 5,
    img: "testimonialGrid/image-patrick.jpg",
    editor: "Patrick Abrams",
    rol: "Verified Graduate",
    title:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    text: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
  },
];

export default function TestimonialGridComponent() {
  const getCardStyle = (id: number) => {
    switch (id) {
      case 1:
        return "bg-[#733fc8] md:col-span-2 md:row-span-1";
      case 2:
        return "bg-[#49556b]";
      case 3:
        return "bg-[#fbfbfb] md:row-span-2";
      case 4:
        return "bg-[#fbfbfb]";
      case 5:
        return "bg-[#18202d] md:col-span-2";
      default:
        return "bg-[#fbfbfb]";
    }
  };

  const getTextStyle = (id: number) => {
    return id === 3 || id === 4 ? "text-gray-600" : "text-white";
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {content.map(({ id, title, text, editor, rol, img }) => (
          <div
            key={id}
            className={`p-6 rounded-xl shadow-xl ${getCardStyle(id)}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={img} alt={editor} className="w-10 h-10 rounded-full" />
              <div>
                <h2 className={`font-bold ${getTextStyle(id)}`}>{editor}</h2>
                <p className={`text-sm ${getTextStyle(id)} opacity-50`}>
                  {rol}
                </p>
              </div>
            </div>
            <h3 className={`text-xl font-bold mb-4 ${getTextStyle(id)}`}>
              {title}
            </h3>
            <p
              className={`${getTextStyle(id)} opacity-70 text-sm md:text-base`}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
