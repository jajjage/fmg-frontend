"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function ResellerApiDocsPage() {
  const docsUrl = "/api/v1/docs/reseller/openapi.json";

  return (
    <div className="bg-muted/40 min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Reseller API Documentation</h1>
          <p className="text-muted-foreground mt-2">
            OpenAPI reference for API key purchases, status polling, and webhook
            callbacks.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>OpenAPI Specification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Open the live JSON specification in your browser or import it into
              Postman, Insomnia, Swagger Editor, or your API client of choice.
            </p>
            <Button asChild>
              <a href={docsUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open OpenAPI JSON
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardHeader><CardTitle>Public V1 · ADEX and MSORG compatible</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">Use the same Nexus public contract for products fulfilled through ADEX or MSORG child suppliers. Responses are synchronous; webhooks are optional status notifications.</p>
            <p className="text-sm"><strong>Network IDs</strong> — ADEX: MTN 1, AIRTEL 2, GLO 3, 9MOBILE 4. MSORG: MTN 1, GLO 2, 9MOBILE 3, AIRTEL 4, SMILE 5.</p>
            <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs text-white">{`POST /api/data
Authorization: Token YOUR_NEXUS_API_KEY
Content-Type: application/json

{"network":1,"phone":"07062723822","data_plan":1,"bypass":false,"request-id":"Data_unique_id"}

POST /api/topup
Authorization: Token YOUR_NEXUS_API_KEY
Content-Type: application/json

{"network":1,"phone":"08166990365","plan_type":"VTU","amount":100,"bypass":false,"request-id":"Airtime_unique_id"}`}</pre>
            <p className="text-muted-foreground text-xs">ADEX-compatible clients can use the credentials created in the API Console and validate them through POST /api/user using Basic base64(username:password). Keep the Nexus API key for direct Token-authenticated requests.</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
