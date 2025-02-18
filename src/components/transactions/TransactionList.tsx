
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, XCircle, FileText } from "lucide-react";

type TransactionStatus = "pending" | "approved" | "rejected";

interface Transaction {
  id: string;
  propertyAddress: string;
  listingPrice: number;
  buyerName: string;
  status: TransactionStatus;
  createdAt: string;
  documents: string[];
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    propertyAddress: "123 Main Street, City, State",
    listingPrice: 450000,
    buyerName: "John Doe",
    status: "pending",
    createdAt: "2024-02-15",
    documents: ["booking-form.pdf", "id-verification.pdf"]
  },
  {
    id: "2",
    propertyAddress: "456 Oak Avenue, City, State",
    listingPrice: 680000,
    buyerName: "Jane Smith",
    status: "approved",
    createdAt: "2024-02-14",
    documents: ["booking-form.pdf", "loan-application.pdf", "id-verification.pdf"]
  },
  {
    id: "3",
    propertyAddress: "789 Pine Street, City, State",
    listingPrice: 525000,
    buyerName: "Robert Johnson",
    status: "rejected",
    createdAt: "2024-02-13",
    documents: ["booking-form.pdf"]
  }
];

const TransactionList = () => {
  const statusIcons = {
    pending: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    approved: <CheckCircle className="h-5 w-5 text-green-500" />,
    rejected: <XCircle className="h-5 w-5 text-red-500" />
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Transaction List</h2>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search transactions..."
            className="w-64"
          />
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <div className="space-y-4">
        {mockTransactions.map((transaction) => (
          <Card key={transaction.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{transaction.propertyAddress}</h3>
                  {statusIcons[transaction.status]}
                </div>
                <p className="text-sm text-muted-foreground">
                  Buyer: {transaction.buyerName}
                </p>
                <p className="text-sm text-muted-foreground">
                  Price: {formatCurrency(transaction.listingPrice)}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-sm text-muted-foreground">
                  Created: {transaction.createdAt}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {transaction.documents.length} documents
                  </span>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
