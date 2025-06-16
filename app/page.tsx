import Stopwatch from "@/components/Stopwatch";
import TableMain from "@/components/TableMain";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
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
        </div>
      </div>

    </div>
  );
}
