"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function V1ApiConsole() {
  const [mode, setMode] = useState<"data" | "topup">("data");
  const [key, setKey] = useState("");
  const [network, setNetwork] = useState("1");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true);
    try {
      const requestId = `${mode === "data" ? "Data" : "Airtime"}_${crypto.randomUUID()}`;
      const payload = mode === "data"
        ? { network: Number(network), phone, data_plan: Number(plan), bypass: false, "request-id": requestId }
        : { network: Number(network), phone, plan_type: "VTU", amount: Number(amount), bypass: false, "request-id": requestId };
      const response = await fetch(`/api/${mode}`, { method: "POST", headers: { Authorization: `Token ${key}`, "Content-Type": "application/json" }, body: JSON.stringify(payload), cache: "no-store" });
      setResult(JSON.stringify(await response.json(), null, 2));
    } catch (error) { setResult(error instanceof Error ? error.message : "Request failed"); }
    finally { setBusy(false); }
  }
  return <form onSubmit={(e) => void submit(e)} className="max-w-3xl space-y-4 rounded-xl border p-6">
    <h2 className="text-xl font-semibold">V1 API Console</h2>
    <p className="text-muted-foreground text-sm">Purchase responses are synchronous. Webhooks are optional notifications. Your product's data_plan and network IDs come from the tenant catalog/protocol.</p>
    <p className="text-muted-foreground text-xs">ADEX networks: MTN 1, AIRTEL 2, GLO 3, 9MOBILE 4. MSORG: MTN 1, GLO 2, 9MOBILE 3, AIRTEL 4, SMILE 5. Airtime uses plan_type VTU.</p>
    <div className="flex gap-2"><Button type="button" variant={mode === "data" ? "default" : "outline"} onClick={() => setMode("data")}>Data</Button><Button type="button" variant={mode === "topup" ? "default" : "outline"} onClick={() => setMode("topup")}>Airtime</Button></div>
    <div className="space-y-2"><Label htmlFor="v1-api-key">Nexus API key</Label><Input id="v1-api-key" type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Paste an API key created in API Keys" required /></div>
    <div className="grid gap-4 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="v1-network">Network ID</Label><Input id="v1-network" value={network} onChange={(e) => setNetwork(e.target.value)} required /></div><div className="space-y-2"><Label htmlFor="v1-phone">Phone</Label><Input id="v1-phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /></div></div>
    {mode === "data" ? <div className="space-y-2"><Label htmlFor="v1-plan">Data plan number</Label><Input id="v1-plan" value={plan} onChange={(e) => setPlan(e.target.value)} required /></div> : <div className="space-y-2"><Label htmlFor="v1-amount">Airtime amount</Label><Input id="v1-amount" value={amount} onChange={(e) => setAmount(e.target.value)} required /></div>}
    <Button type="submit" disabled={busy}>{busy ? "Waiting for response…" : "Send request"}</Button>
    {result && <pre className="max-h-96 overflow-auto rounded bg-zinc-950 p-4 text-xs text-white">{result}</pre>}
  </form>;
}

export function AdexCredentialsPanel() {
  const [name, setName] = useState("");
  const [secret, setSecret] = useState<{ username: string; password: string } | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function create(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const response = await fetch("/api/v1/reseller/credentials/adex", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name }) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.message || "Could not create ADEX credentials");
      setSecret(body.data); setName("");
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Request failed"); }
    finally { setBusy(false); }
  }
  return <div className="max-w-2xl space-y-4 rounded-xl border p-6"><h2 className="text-xl font-semibold">ADEX-compatible credentials</h2><p className="text-muted-foreground text-sm">Create separate username/password credentials for each ADEX client. The password is shown once.</p><form onSubmit={(e) => void create(e)} className="flex gap-2"><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Integration name" required /><Button disabled={busy}>{busy ? "Creating…" : "Create"}</Button></form>{error && <p role="alert" className="text-destructive text-sm">{error}</p>}{secret && <div className="space-y-2 rounded-lg bg-muted p-4"><p><strong>Username:</strong> <code>{secret.username}</code></p><p><strong>Password:</strong> <code>{secret.password}</code></p><p className="text-muted-foreground text-xs">Configure the base URL and these credentials. The ADEX client verifies them using /api/user.</p></div>}</div>;
}

