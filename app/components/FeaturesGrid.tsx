import { cn } from "@/lib/utils";

import { LockIcon, MapPin, TruckIcon, Undo, Undo2Icon } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      title: "Secure Payments",
      description:
        "Shop with confidence knowing that your transactions are safeguarded.",
      icon: <LockIcon />,
    },
    {
      title: "Free Shipping",
      description:
        "Shopping with no extra charges – savor the liberty of complimentary shipping on every order.",
      icon: <TruckIcon />,
    },
    {
      title: "Easy Returns",
      description:
        "With our hassle-free Easy Returns, changing your mind has never been more convenient.",
      icon: <Undo2Icon />,
    },
    {
      title: "Order Tracking",
      description:
        "Stay in the loop with our Order Tracking feature – from checkout to your doorstep.",
      icon: <MapPin />,
    },
  ];
  return (
    <div className="container-p grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto gap-4 ">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col overflow-clip  py-10 relative group/feature dark:border-neutral-800 text-center bg-white rounded-md",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 text-center flex w-full items-center justify-center">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-gray-700 transition-all duration-200 origin-center" />
        <span className=" group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
          {/* font-cg text-2xl font-black  */}
        </span>
      </div>
      <div className="justify-center items-center md:flex hidden">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 ">
          {description}
        </p>
      </div>
    </div>
  );
};
