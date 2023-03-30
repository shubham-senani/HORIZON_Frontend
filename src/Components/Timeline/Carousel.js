import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import prev from "./prev.png";
import next from "./next.png";
import linedate from "./linedate.png";
import "./Carousel.css";

export const CarouselItem = ({ children, width }, props) => {
  var [classname, setclassname] = useState("carousel-item");

  return (
    <div className={classname} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  let Day1 = [
    {
      Topic: "CEO's Conference",
      Content:
        "A two-day real-world problem-solving event. With 10 minutes to present your solution, are you up for the challenge? Participate in teams of 4.",
      Time: "6:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MG1mYXQ3bm1rZWZoamlscTBjbmFhczhiNjAgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Call of Duty: Resurgence",
      Content:
        "Guns loaded, armour equipped, meds ready!Call Of Duty: Resurgence aims at creating a competitive and fun experience. Participate in teams of 5 and get the maximum number of kills!",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHJucWZzZjd2bnUxbDdoMTBzYjQwdGVqbXAgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    },
    {
      Topic: "The cadence valour",
      Content:
        "Amateur or pro, your opportunity to shine at Valorant is here! Cadence Valour is the flagship valorant event of “Horizon”. Participate in teams of 5.",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGk2dG1sZG0yODRvMmZrOGE0MWMwMmRramMgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    }
  ];
  let Day2 = [
    {
      Topic: "CEO's Conference",
      Content:
        "A two-day real-world problem-solving event. With 10 minutes to present your solution, are you up for the challenge? Participate in teams of 4.",
      Time: "6:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MG1mYXQ3bm1rZWZoamlscTBjbmFhczhiNjAgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Call of Duty: Resurgence",
      Content:
        "Guns loaded, armour equipped, meds ready!Call Of Duty: Resurgence aims at creating a competitive and fun experience. Participate in teams of 5 and get the maximum number of kills!",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHJucWZzZjd2bnUxbDdoMTBzYjQwdGVqbXAgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    },
    {
      Topic: "The cadence valour",
      Content:
        "Amateur or pro, your opportunity to shine at Valorant is here! Cadence Valour is the flagship valorant event of “Horizon”. Participate in teams of 5.",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGk2dG1sZG0yODRvMmZrOGE0MWMwMmRramMgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    }
  ];
  let Day3 = [
    {
      Topic: "De5igne4",
      Content:
        "Channelize your inner Picasso! Online graphic design and artwork contest accepting individual participation. Use any design software of your choice to create on the given theme.",
      Time: "00:00 AM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Mmg5dmw5Mm02ZWhsa3Eza2R1cGRob2pjaHIgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Ignitor 3.O Talk",
      Content:
        "The third session in the series of IIITV-ICD’s Ignitor talks, Ignitor 3.0 - the talk by Prashant Kumar (Founder and CEO of Eigenlytics). Come one, come all! Speaker session revolving around evolving startup culture, technical aspects, and much more.",
      Time: "5:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2c2NzNlaHVtMTNtZnVxNGx2a3VyYzQ0dGkgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Capture Point 5353",
      Content:
        "Get ready to debug! 36 hours, puzzling problems, and intense competition is all that is standing between you and the prizes. Compete in teams of 2 to Capture the Flag as quickly as possible!",
      Time: "09:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGhhdDJhczFob3Q1ZHZ1a2JjbTNwODJ0ZHUgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    }
  ];
  let Day4 = [
    {
      Topic: "Capture Point 5353",
      Content:
        "Get ready to debug! 36 hours, puzzling problems, and intense competition is all that is standing between you and the prizes. Compete in teams of 2 to Capture the Flag as quickly as possible!",
      Time: "Ongoing",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGhhdDJhczFob3Q1ZHZ1a2JjbTNwODJ0ZHUgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "De5igne4",
      Content:
        "Channelize your inner Picasso! Online graphic design and artwork contest accepting individual participation. Use any design software of your choice to create on the given theme.",
      Time: "Ongoing",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Mmg5dmw5Mm02ZWhsa3Eza2R1cGRob2pjaHIgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Capture Point 5353",
      Content:
        "Get ready to debug! 36 hours, puzzling problems, and intense competition is all that is standing between you and the prizes. Compete in teams of 2 to Capture the Flag as quickly as possible!",
      Time: "Ongoing",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGhhdDJhczFob3Q1ZHZ1a2JjbTNwODJ0ZHUgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    }
  ];

  let Day5 = [
    {
      Topic: "Capture Point 5353",
      Content:
        "Get ready to debug! 36 hours, puzzling problems, and intense competition is all that is standing between you and the prizes. Compete in teams of 2 to Capture the Flag as quickly as possible!",
      Time: "Till 9:00 AM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGhhdDJhczFob3Q1ZHZ1a2JjbTNwODJ0ZHUgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "De5igne4",
      Content:
        "Channelize your inner Picasso! Online graphic design and artwork contest accepting individual participation. Use any design software of your choice to create on the given theme.",
      Time: "Till 11:59 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Mmg5dmw5Mm02ZWhsa3Eza2R1cGRob2pjaHIgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Cyber Security Workshop",
      Content:
        "A workshop on cyber security for all. A must watch in today's day and age, it will make students aware of various cyber threats.",
      Time: "5:30 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3I3bzZmaXJ2Yzh1ODdzY2l0MDJrbGdrcmpfMjAyMzAyMTNUMTIwMDAwWiBjX2Y5NGY4NzNmYTY2MzBhNjQ4OWE4MWVkN2VjNWFiN2NhYjE2ZDEyOGY3OGUxNmViYTVjN2ZjZTc2NTIzN2ZhNmVAZw&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com&scp=ALL"
    },

    {
      Topic: "The cadence valour",
      Content:
        "Amateur or pro, your opportunity to shine at Valorant is here! Cadence Valour is the flagship valorant event of “Horizon”. Participate in teams of 5.",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGk2dG1sZG0yODRvMmZrOGE0MWMwMmRramMgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    },
    {
      Topic: "Call of Duty: Resurgence",
      Content:
        "Guns loaded, armour equipped, meds ready!Call Of Duty: Resurgence aims at creating a competitive and fun experience. Participate in teams of 5 and get the maximum number of kills!",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHJucWZzZjd2bnUxbDdoMTBzYjQwdGVqbXAgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    }
  ];

  let Day6 = [
    {
      Topic: "SWOT The Trends",
      Content:
        "Interested in trading? SWOT the Trends - the virtual trading event for those who are interested in everything finance. Get ready to analyse the trends!",
      Time: "9:15 AM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXV1aTYycGVnbG5waTRmMmI1aDRoOTU0a2EgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },

    {
      Topic: "Cyber Security Workshop",
      Content:
        "A workshop on cyber security for all. A must watch in today's day and age, it will make students aware of various cyber threats.",
      Time: "5:30 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3I3bzZmaXJ2Yzh1ODdzY2l0MDJrbGdrcmpfMjAyMzAyMTNUMTIwMDAwWiBjX2Y5NGY4NzNmYTY2MzBhNjQ4OWE4MWVkN2VjNWFiN2NhYjE2ZDEyOGY3OGUxNmViYTVjN2ZjZTc2NTIzN2ZhNmVAZw&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com&scp=ALL"
    },
    {
      Topic: "Call of Duty: Resurgence",
      Content:
        "Guns loaded, armour equipped, meds ready!Call Of Duty: Resurgence aims at creating a competitive and fun experience. Participate in teams of 5 and get the maximum number of kills!",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHJucWZzZjd2bnUxbDdoMTBzYjQwdGVqbXAgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    },

    {
      Topic: "The cadence valour",
      Content:
        "Amateur or pro, your opportunity to shine at Valorant is here! Cadence Valour is the flagship valorant event of “Horizon”. Participate in teams of 5.",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGk2dG1sZG0yODRvMmZrOGE0MWMwMmRramMgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    }
  ];

  let Day7 = [
    {
      Topic: "SWOT The Trends",
      Content:
        "Interested in trading? SWOT the Trends - the virtual trading event for those who are interested in everything finance. Get ready to analyse the trends!",
      Time: "Ongoing",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXV1aTYycGVnbG5waTRmMmI1aDRoOTU0a2EgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },

    {
      Topic: "The Choice Matrix (Round-1)",
      Content:
        "From Finance to Programming to Gaming and much more! The Choice Matrix – a two-round quiz with intriguing questions and increasing pressure. Participate in teams of 2.",
      Time: "6:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NHZxbzM1a2YyNDU2cm0xcGExbnBlNTMwZnQgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Call of Duty: Resurgence",
      Content:
        "Guns loaded, armour equipped, meds ready!Call Of Duty: Resurgence aims at creating a competitive and fun experience. Participate in teams of 5 and get the maximum number of kills!",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHJucWZzZjd2bnUxbDdoMTBzYjQwdGVqbXAgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    },

    {
      Topic: "The cadence valour",
      Content:
        "Amateur or pro, your opportunity to shine at Valorant is here! Cadence Valour is the flagship valorant event of “Horizon”. Participate in teams of 5.",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGk2dG1sZG0yODRvMmZrOGE0MWMwMmRramMgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    }
  ];

  let Day8 = [
    {
      Topic: "SWOT The Trends",
      Content:
        "Interested in trading? SWOT the Trends - the virtual trading event for those who are interested in everything finance. Get ready to analyse the trends!",
      Time: "Ongoing",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXV1aTYycGVnbG5waTRmMmI1aDRoOTU0a2EgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },

    {
      Topic: "Code Combat",
      Content:
        "Coding event ,boost your knowledge regarding DSA and Competitive Coding.",
      Time: "6:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDFsdnR1ZG9rdDBjOHQ2bmpuamtlOTNwdWggY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Call of Duty: Resurgence",
      Content:
        "Guns loaded, armour equipped, meds ready!Call Of Duty: Resurgence aims at creating a competitive and fun experience. Participate in teams of 5 and get the maximum number of kills!",
      Time: "10:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHJucWZzZjd2bnUxbDdoMTBzYjQwdGVqbXAgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    },

    {
      Topic: "The cadence valour",
      Content:
        "Amateur or pro, your opportunity to shine at Valorant is here! Cadence Valour is the flagship valorant event of “Horizon”. Participate in teams of 5.",
      Time: "10:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGk2dG1sZG0yODRvMmZrOGE0MWMwMmRramMgMjAyMDExMDI2QGRpdS5paWl0dmFkb2RhcmEuYWMuaW4&tmsrc=202011026%40diu.iiitvadodara.ac.in"
    }
  ];

  let Day9 = [
    {
      Topic: "SWOT The Trends",
      Content:
        "Interested in trading? SWOT the Trends - the virtual trading event for those who are interested in everything finance. Get ready to analyse the trends!",
      Time: "Till 3:30 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXV1aTYycGVnbG5waTRmMmI1aDRoOTU0a2EgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },

    {
      Topic: "The Choice Matrix(Round-2)",
      Content:
        "From Finance to Programming to Gaming and much more! The Choice Matrix – a two-round quiz with intriguing questions and increasing pressure. Participate in teams of 2.",
      Time: "6:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWVzZXNmcDZnMm1sajVjOGplaGU3bmpzbTAgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    },
    {
      Topic: "Hackoverflow",
      Content:
        "48 hours to cook up innovative solutions to real-life problems and implement them using Android or Web development. ",
      Time: "9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWp0YWU4NHM1Z3JxN2Zxa250MWZzaWtrcXIgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    }
  ];
  let Day10 = [
    {
      Topic: "Hackoverflow",
      Content:
        "48 hours to cook up innovative solutions to real-life problems and implement them using Android or Web development. ",
      Time: "Ongoing",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWp0YWU4NHM1Z3JxN2Zxa250MWZzaWtrcXIgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    }
  ];

  let Day11 = [
    {
      Topic: "Hackoverflow",
      Content:
        "48 hours to cook up innovative solutions to real-life problems and implement them using Android or Web development. ",
      Time: "Till 9:00 PM",
      calender:
        "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWp0YWU4NHM1Z3JxN2Zxa250MWZzaWtrcXIgY19mOTRmODczZmE2NjMwYTY0ODlhODFlZDdlYzVhYjdjYWIxNmQxMjhmNzhlMTZlYmE1YzdmY2U3NjUyMzdmYTZlQGc&tmsrc=c_f94f873fa6630a6489a81ed7ec5ab7cab16d128f78e16eba5c7fce765237fa6e%40group.calendar.google.com"
    }
  ];

  useEffect(() => {
    if (activeIndex === 0) {
      setdays(Day1);
    }
    if (activeIndex === 1) {
      setdays(Day2);
    }
    if (activeIndex === 2) {
      setdays(Day3);
    }
    if (activeIndex === 3) {
      setdays(Day4);
    }
    if (activeIndex === 4) {
      setdays(Day5);
    }
    if (activeIndex === 5) {
      setdays(Day6);
    }
    if (activeIndex === 6) {
      setdays(Day7);
    }
    if (activeIndex === 7) {
      setdays(Day8);
    }
    if (activeIndex === 8) {
      setdays(Day9);
    }
    if (activeIndex === 9) {
      setdays(Day10);
    }
    if (activeIndex === 10) {
      setdays(Day11);
    }
  }, [activeIndex]);

  useEffect(() => {
    var date = new Date();

    console.log(date.getDate());
    for (let i = 9; i < 20; i++) {
      if (date.getDate() === i) {
        setActiveIndex(i - 9);
      }
    }
  }, []);

  var [days, setdays] = useState(Day1);
  const renderListOfUserNames = (names) => {
    return names.map((name) => <li>{name}</li>);
  };
  return (
    <div className="hello">
      <div className="temp">
        <div {...handlers} className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 10}vw)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <div {...handlers} className="carousel carousel1">
          <div className="indicators">
            <img
              className="linedate"
              src={linedate}
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              alt="previous"
            />
            <div className="arrows">
              <img
                className="img1"
                src={prev}
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
                alt="previous"
              />

              <img
                className="img2"
                src={next}
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="temp1">
        <div {...handlers} className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 40}vw)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <div {...handlers} className="carousel carousel1">
          <div className="indicators">
            <img
              className="linedate"
              src={linedate}
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              alt="previous"
            />
            <div className="arrows">
              <img
                className="img1"
                src={prev}
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
                alt="previous"
              />

              <img
                className="img2"
                src={next}
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="temp2">
        <div {...handlers} className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 20}vw)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <div {...handlers} className="carousel carousel1">
          <div className="indicators">
            <img
              className="linedate"
              src={linedate}
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              alt="previous"
            />
            <div className="arrows">
              <img
                className="img1"
                src={prev}
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
                alt="previous"
              />

              <img
                className="img2"
                src={next}
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
      <div classname="outer-cards">
        {days.map((Day1, idx) => {
          return (
            <div className="align_suy">
              <div className="card-listall">
                <div className="cardevent">
                  <h2 className="heading">{Day1.Topic}</h2>
                  <p className="time">{Day1.Time}</p>
                </div>
                <p className="content">{Day1.Content}</p>
                <button className="view-button">
                  <a rel="noreferrer" target="_blank" href={Day1.calender}>
                    <h3 className="button-text">Add to Calendar</h3>
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

// with active index i want to do if(activeindex == 1) {var day = "day1"}
