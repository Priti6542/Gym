// programsData.jsx
import { LiaDumbbellSolid } from "react-icons/lia";
import { FaRunning } from "react-icons/fa";
import { LiaBurnSolid } from "react-icons/lia";
import { LiaHeartbeatSolid } from "react-icons/lia";

export const programsData = [
    {
      logo: <LiaDumbbellSolid size={30} />,
      heading: "Strength Training",
      details: "In this program, you are trained to improve your strength through many exercises."
    },
    {
      logo: <FaRunning size={30} />, // Font Awesome icon
      heading: "Cardio Training",
      details: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes."
    },
    {
      logo: <LiaBurnSolid size={30}/>,
      heading: "Fat Burning",
      details: "This program is suitable for you who wants to get rid of your fat and lose their weight."
    },

    {
      logo: <LiaHeartbeatSolid size={30}/>,
      heading: "Health Fitness",
      details: "This programs is designed for those who exercises only for their body fitness not body building."
    }
  ];
  