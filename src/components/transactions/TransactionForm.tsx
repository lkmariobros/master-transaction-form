
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { FileUp } from "lucide-react";
import { useState } from "react";

interface TransactionFormProps {
  onClose: () => void;
}

const TransactionForm = ({ onClose }: TransactionFormProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">New Transaction</h2>
          
          {/* Property Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Property Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyAddress">Property Address</Label>
                <Input id="propertyAddress" placeholder="Enter property address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type</Label>
                <Input id="propertyType" placeholder="e.g., Residential, Commercial" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="listingPrice">Listing Price</Label>
                <Input id="listingPrice" type="number" placeholder="Enter amount" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="commissionRate">Commission Rate (%)</Label>
                <Input id="commissionRate" type="number" step="0.1" placeholder="Enter percentage" required />
              </div>
            </div>
          </div>

          {/* Buyer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Buyer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buyerName">Buyer Name</Label>
                <Input id="buyerName" placeholder="Enter buyer's full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerEmail">Buyer Email</Label>
                <Input id="buyerEmail" type="email" placeholder="Enter buyer's email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerPhone">Buyer Phone</Label>
                <Input id="buyerPhone" placeholder="Enter buyer's phone number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerNotes">Additional Notes</Label>
                <Textarea id="buyerNotes" placeholder="Enter any additional notes" />
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Documents</h3>
            <div className="border-2 border-dashed border-muted p-6 rounded-lg text-center">
              <input
                type="file"
                id="documents"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="documents"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <FileUp className="h-8 w-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Click to upload documents
                </span>
              </label>
              {files.length > 0 && (
                <div className="mt-4 text-sm text-muted-foreground">
                  {files.length} file(s) selected
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Create Transaction</Button>
        </div>
      </form>
    </Card>
  );
};

export default TransactionForm;
