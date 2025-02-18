
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, DollarSign, FileText, ChartBar, Bell, X } from "lucide-react";
import TransactionForm from "@/components/transactions/TransactionForm";

const Index = () => {
  const [showTransactionForm, setShowTransactionForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">PropTrack Master</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button onClick={() => setShowTransactionForm(true)}>
              New Transaction
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {showTransactionForm ? (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 overflow-y-auto">
            <div className="min-h-screen px-4 py-8">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setShowTransactionForm(false)}
              >
                <X className="h-5 w-5" />
              </Button>
              <TransactionForm onClose={() => setShowTransactionForm(false)} />
            </div>
          </div>
        ) : (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 glass-card animate-fadeIn">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Listings</p>
                    <h3 className="text-2xl font-semibold mt-2">24</h3>
                  </div>
                  <Building className="h-5 w-5 text-primary" />
                </div>
              </Card>
              
              <Card className="p-6 glass-card animate-fadeIn animation-delay-100">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Monthly Earnings</p>
                    <h3 className="text-2xl font-semibold mt-2">$45,850</h3>
                  </div>
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
              </Card>
              
              <Card className="p-6 glass-card animate-fadeIn animation-delay-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pending Transactions</p>
                    <h3 className="text-2xl font-semibold mt-2">8</h3>
                  </div>
                  <FileText className="h-5 w-5 text-primary" />
                </div>
              </Card>
              
              <Card className="p-6 glass-card animate-fadeIn animation-delay-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                    <h3 className="text-2xl font-semibold mt-2">68%</h3>
                  </div>
                  <ChartBar className="h-5 w-5 text-primary" />
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <Card className="p-6 glass-card animate-slideUp">
                <div className="space-y-4">
                  <ActivityItem
                    title="New Transaction"
                    description="123 Main Street property transaction initiated"
                    time="2 hours ago"
                    status="pending"
                  />
                  <ActivityItem
                    title="Commission Received"
                    description="Commission payment for 456 Oak Avenue received"
                    time="5 hours ago"
                    status="success"
                  />
                  <ActivityItem
                    title="Document Update"
                    description="Additional documents requested for 789 Pine Street"
                    time="1 day ago"
                    status="warning"
                  />
                </div>
              </Card>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

const ActivityItem = ({ 
  title, 
  description, 
  time, 
  status 
}: { 
  title: string; 
  description: string; 
  time: string; 
  status: 'pending' | 'success' | 'warning';
}) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-red-100 text-red-800',
  };

  return (
    <div className="flex items-start justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors">
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-sm text-muted-foreground">{time}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default Index;
