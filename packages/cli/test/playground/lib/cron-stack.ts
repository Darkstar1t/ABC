import { RuleTargetInput } from "@aws-cdk/aws-events";
import * as sst from "@serverless-stack/resources";

export class MainStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    new sst.Cron(this, "Cron", {
      schedule: "rate(1 minute)",
      job: {
        function: "src/lambda.main",
        jobProps: {
          event: RuleTargetInput.fromObject({
            name: "abc",
          }),
        },
      },
    });
  }
}
