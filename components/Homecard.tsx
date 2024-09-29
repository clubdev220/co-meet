import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * 
 *   title="Nouveau Meeting"
        img="/icons/add-meeting.svg"
        description="Créer un nouveau meeting"
        handleClick={() => setMeeting("isJoinigMeeting")}
        className="bg-orange-1"
 */

interface HomeCardProps {
  title: string;
  img: string;
  description: string;
  className: string;
  handleClick: () => void;
}

const Homecard = ({
  img,
  description,
  title,
  className,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[400px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center size-12 rounded-[10px] glassmorphism">
        <Image src={img} alt="Meeting" width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Homecard;
