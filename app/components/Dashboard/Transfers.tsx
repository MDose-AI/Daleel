"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Transfers: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Transfers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="transfer_id">Transfer ID</Label>
          <Input id="transfer_id" placeholder="Enter Transfer ID" />
        </div>
        <div>
          <Label htmlFor="transfer_time">Transfer Time</Label>
          <Input id="transfer_time" type="datetime-local" />
        </div>
        <div>
          <Label htmlFor="from_location">From Location</Label>
          <Input id="from_location" placeholder="Enter From Location" />
        </div>
        <div>
          <Label htmlFor="to_location">To Location</Label>
          <Input id="to_location" placeholder="Enter To Location" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Transfers;
