import { TbHeartPlus } from "react-icons/tb";
import { LuCrown } from "react-icons/lu";
import { LuDumbbell } from "react-icons/lu";

export const plansData = [
    {
        icon: <TbHeartPlus />,
        name: "BASIC PLAN",
        price: "25",
        features: [
            "2 hours of exercises",
            "Free consultation with coaches",
            "Access to The Community"
        ]
    },
    {
        icon: <LuCrown />, // Add an appropriate icon here
        name: "PREMIUM PLAN",
        price: "30",
        features: [
            "5 hours of exercises",
            "Free consultation of Coaches",
            "Access to The minibar",
            
        ]
    },

    {
        icon: <LuDumbbell />, // Add an appropriate icon here
        name: "PRO PLAN",
        price: "45",
        features: [
            "8 hours of exercises",
            "Consultation of Private Coach",
            "Free Fitness Merchandises",
            
        ]
    }
];
