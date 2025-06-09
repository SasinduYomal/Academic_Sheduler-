import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function FacultyManagement() {
  const [selectedTab, setSelectedTab] = useState("profiles");

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Faculty Management</h1>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profiles">Faculty Profiles</TabsTrigger>
          <TabsTrigger value="assign">Assign Courses/Modules</TabsTrigger>
          <TabsTrigger value="availability">View Availability</TabsTrigger>
          <TabsTrigger value="preferences">Set Preferences</TabsTrigger>
          <TabsTrigger value="leaves">Manage Leaves</TabsTrigger>
        </TabsList>

        <TabsContent value="profiles">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Faculty Profiles</h2>
              {/* Add/Edit/Delete Faculty Profile UI goes here */}
              <Button>Add Faculty</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assign">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Assign to Courses/Modules</h2>
              {/* Assignment UI goes here */}
              <Button>Assign Course</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="availability">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Faculty Availability</h2>
              {/* Availability display UI goes here */}
              <p>View and manage faculty availability.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Teaching Preferences</h2>
              {/* Preferences form UI goes here */}
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaves">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Leave Management</h2>
              {/* Leave form and leave list UI goes here */}
              <Button>Apply Leave</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default FacultyManagement;
