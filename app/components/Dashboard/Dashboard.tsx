"use client";

import React from "react";
import PatientInformation from "./PatientInformation";
import AdmissionDetails from "./AdmissionDetails";
import IcuStay from "./IcuStay";
import Transfers from "./Transfers";
import Diagnoses from "./Diagnoses";
import Procedures from "./Procedures";
import Prescriptions from "./Prescriptions";
import LabEvents from "./LabEvents";
import IcuChartEvents from "./IcuChartEvents";
import MicrobiologyEvents from "./MicrobiologyEvents";
import RadiologyReports from "./RadiologyReports";
import Billing from "./Billing";
import MedicationsAdministered from "./MedicationsAdministered";
import { DashboardProvider } from "../../contexts/DashboardContext";

export const Dashboard = () => {
  return (
    <DashboardProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Patient Data Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <PatientInformation />
          <AdmissionDetails />
          <IcuStay />
          <Transfers />
          <Diagnoses />
          <Procedures />
          <Prescriptions />
          <LabEvents />
          <IcuChartEvents />
          <MicrobiologyEvents />
          <RadiologyReports />
          <Billing />
          <MedicationsAdministered />
        </div>
      </div>
    </DashboardProvider>
  );
};
