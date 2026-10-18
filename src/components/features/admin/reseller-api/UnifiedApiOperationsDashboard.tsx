"use client";
import { useAdminUnifiedApiOperationsOverview } from "@/hooks/admin/useAdminResellerApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function UnifiedApiOperationsDashboard() {
  const today = new Date().toISOString().slice(0,10);
  const start = new Date(); start.setDate(start.getDate()-6);
  const [fromDate,setFromDate]=useState(start.toISOString().slice(0,10));
  const [toDate,setToDate]=useState(today);
  const [source,setSource]=useState("all");
  const {data,isLoading,isError}=useAdminUnifiedApiOperationsOverview({fromDate,toDate,source:source as "all"|"legacy_reseller"|"v1_api"});
  const report=data?.data;
  return <section className="space-y-4" aria-label="Unified API operations">
    <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-xl font-semibold">API operations</h2><p className="text-sm text-muted-foreground">Legacy reseller and V1 API activity for this tenant.</p></div><div className="flex flex-wrap gap-2"><label className="grid gap-1 text-xs text-muted-foreground">From<input aria-label="Operations from date" type="date" value={fromDate} max={toDate} onChange={e=>setFromDate(e.target.value)} className="h-9 rounded-md border bg-background px-2 text-sm text-foreground"/></label><label className="grid gap-1 text-xs text-muted-foreground">To<input aria-label="Operations to date" type="date" value={toDate} min={fromDate} max={today} onChange={e=>setToDate(e.target.value)} className="h-9 rounded-md border bg-background px-2 text-sm text-foreground"/></label><label className="grid gap-1 text-xs text-muted-foreground">API<select aria-label="API source" value={source} onChange={e=>setSource(e.target.value)} className="h-9 rounded-md border bg-background px-2 text-sm text-foreground"><option value="all">All APIs</option><option value="v1_api">V1 API</option><option value="legacy_reseller">Legacy reseller</option></select></label></div></div>
    {isLoading&&<p className="text-sm text-muted-foreground">Loading API operations…</p>}{isError&&<p role="alert" className="text-sm text-destructive">Could not load API operations.</p>}
    {report&&<><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><Metric title="Requests" value={report.totals.requests.toLocaleString()}/><Metric title="Purchase amount" value={`₦${report.totals.amount.toLocaleString()}`}/><Metric title="Success rate" value={report.totals.successRate} detail={`${report.totals.resolved} resolved`}/><Metric title="Supplier p95" value={`${(report.latency.p95Ms/1000).toFixed(1)}s`} detail={`Average ${(report.latency.averageMs/1000).toFixed(1)}s`}/></div>
    {report.alerts.map(alert=><div role="status" key={alert.code} className="rounded-md border p-3 text-sm">{alert.severity.toUpperCase()}: {alert.message}</div>)}
    <div className="grid gap-3 lg:grid-cols-3"><Panel title="Request status">{Object.entries(report.status).map(([k,v])=><Line key={k} label={k} value={v}/>)}</Panel><Panel title="By API"><Line label="V1 API" value={report.bySource.v1_api??0}/><Line label="Legacy reseller" value={report.bySource.legacy_reseller??0}/><Line label="Oldest pending" value={report.latency.oldestPendingAt?new Date(report.latency.oldestPendingAt).toLocaleString():"None"}/></Panel><Panel title="By network">{Object.entries(report.byNetwork).map(([k,v])=><Line key={k} label={k} value={`${v.requests} requests · ${v.success} success`}/>)}</Panel></div></>}
  </section>;
}
function Metric({title,value,detail}:{title:string;value:string;detail?:string}){return <Card><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle></CardHeader><CardContent><p className="text-2xl font-semibold">{value}</p>{detail&&<p className="text-xs text-muted-foreground">{detail}</p>}</CardContent></Card>}
function Panel({title,children}:{title:string;children:React.ReactNode}){return <Card><CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader><CardContent className="space-y-2 text-sm">{children}</CardContent></Card>}
function Line({label,value}:{label:string;value:React.ReactNode}){return <div className="flex justify-between gap-2 capitalize"><span>{label}</span><span>{value}</span></div>}

