import RandomCouponGenerator from "@/components/RandomCouponGenerator";
import Stopwatch from "@/components/Stopwatch";
import TableMain from "@/components/TableMain";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 items-center justify-center">
        {/* Header,Nav etc */}

        {/* Main Content */}
        <div className="space-y-6">
          <section>
            {/* Table */}
            <TableMain />
          </section>
          <section>
            <Stopwatch/>
          </section>
          <section className="flex justify-center">
            <RandomCouponGenerator/>
          </section>
        </div>
      </div>

    </div>
  );
}
