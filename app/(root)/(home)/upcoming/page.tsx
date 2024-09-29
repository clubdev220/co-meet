/*const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">À venir</h1>
    </section>
  );
};

export default Upcoming;
*/

import CallList from "@/components/CallList";

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Réunion à venir</h1>

      <CallList type="upcoming" />
    </section>
  );
};

export default Upcoming;
