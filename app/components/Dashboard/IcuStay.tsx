// src/components/Dashboard/IcuStay.tsx
"use client";

import React, { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusCircle, X } from "lucide-react";

const IcuStay: React.FC = () => {
  const context = useContext(DashboardContext);

  if (!context) return null;

  const {
    icuStays,
    currentIcuStay,
    handleIcuStayChange,
    handleAddIcuStay,
    handleDeleteIcuStay,
  } = context;

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>ICU Stay Details</CardTitle>
        <Button variant="ghost" size="icon" onClick={handleAddIcuStay}>
          <PlusCircle className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="stay_id">Stay ID</Label>
          <Input
            id="stay_id"
            placeholder="Enter Stay ID"
            value={currentIcuStay.stay_id}
            onChange={handleIcuStayChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="first_careunit">First Care Unit</Label>
            <Input
              id="first_careunit"
              placeholder="Enter First Care Unit"
              value={currentIcuStay.first_careunit}
              onChange={handleIcuStayChange}
            />
          </div>
          <div>
            <Label htmlFor="last_careunit">Last Care Unit</Label>
            <Input
              id="last_careunit"
              placeholder="Enter Last Care Unit"
              value={currentIcuStay.last_careunit}
              onChange={handleIcuStayChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button variant="outline" className="mt-2" onClick={handleAddIcuStay}>
            Save Record
          </Button>
          <div className="space-x-2">
            {icuStays.map((icuStay, index) => (
              <div key={index} className="flex items-center">
                <Button variant="link">{icuStay.stay_id}</Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteIcuStay(index)}
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IcuStay;
