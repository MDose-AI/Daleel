// src/components/Dashboard/IcuChartEvents.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const IcuChartEvents: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>ICU Chart Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="chartevent_id">Chart Event ID</Label>
          <Input id="chartevent_id" placeholder="Enter Chart Event ID" />
        </div>
        <div>
          <Label htmlFor="chart_time">Chart Time</Label>
          <Input id="chart_time" type="datetime-local" />
        </div>
        <div>
          <Label htmlFor="event_type">Event Type</Label>
          <Input id="event_type" placeholder="Enter Event Type" />
        </div>
        <div>
          <Label htmlFor="event_value">Value</Label>
          <Input id="event_value" placeholder="Enter Value" />
        </div>
      </CardContent>
    </Card>
  );
};

export default IcuChartEvents;
