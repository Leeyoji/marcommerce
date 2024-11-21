import { Button } from "@/components/ui/button";
import DashboardLayout from "../dashboard/layout";
import { CirclePlus, FishIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";




export default function Products() {
    return (
 <DashboardLayout>


<div className="flex items-center justify-end pb-8"> 
          <Link href={'./AddProduct'}>
          <Button className="flex gap-2">
            <CirclePlus className="w-3.5 h-3.5"/>
            <span>Add Products</span>
          </Button>
          </Link>    
      </div>

      <Card>
        <CardHeader>
          <CardTitle> Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="text-lg">
              <TableRow>
                <TableHead className="w-[10rem]">Name</TableHead>
                <TableHead className="w-[15rem]">Description</TableHead>
                <TableHead colSpan={3}>Price</TableHead>
                <TableHead>Stocks</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-md">
              <TableRow>
                <TableCell> <div className="flex gap-3"><FishIcon className="h-10 w-10"/><p className="pt-2">Fishery </p></div></TableCell>
                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, corporis, sit recusandae, laboriosam quas in perspiciatis deleniti dignissimos consequatur quia numquam itaque error nemo. Eos earum quaerat architecto? Id, nam!</TableCell>
                <TableCell><p className="font-semibold">SMALL</p> <p>price</p></TableCell>
                <TableCell><p className="font-semibold">MEDIUM</p> <p>price</p></TableCell>
                <TableCell><p className="font-semibold">BREEDER</p> <p>price</p></TableCell>
                <TableCell>e123</TableCell>
                <TableCell>Edit | Delete</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

 </DashboardLayout>
    );
}