type InfoCardProps = {
  title: string;
  info: string;
};

const InfoCard = ({ title, info }: InfoCardProps) => {
  return (
    <div className="bg-c0 flex flex-col gap-5 flex-1 p-7 text-[1.875rem] rounded-2xl">
      <h2 className="font-bold">{title}</h2>
      <span className="font-ibmPlexMono">{info}</span>
    </div>
  );
};

export default InfoCard;
