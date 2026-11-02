import { LockKeyhole } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const ThirdSemResult = () => (
  <div>
    <PageHeader number="02" title="3rd Sem Result Feedback" description="Results are not yet declared." />
    <section className="container px-4 md:px-8 pb-16">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-10 text-center">
          <LockKeyhole className="h-10 w-10 mx-auto mb-5 text-secondary" aria-hidden="true" />
          <h2 className="text-3xl">Not yet declared</h2>
          <p className="mt-4 text-muted-foreground">The third semester is not yet completed. Result feedback is on hold until results are declared.</p>
        </CardContent>
      </Card>
    </section>
  </div>
);
export default ThirdSemResult;
