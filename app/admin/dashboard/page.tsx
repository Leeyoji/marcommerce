import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartNoAxesCombined, DollarSign, FishIcon, ShoppingBasket, ArrowRightLeft } from "lucide-react";
import { Chart } from "../components/chartdata";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Dashboard() {
    return (
      <>
      <Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Overview</TabsTrigger>
    <TabsTrigger value="password">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="account">

  <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4"> 
          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <CardTitle>
                Total Revenue
              </CardTitle>
              <DollarSign className="text-green-500"/>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">PHP 1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
              <CardTitle>
                Total Sales
              </CardTitle>
              <ChartNoAxesCombined className="text-amber-400" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
              <CardTitle>
                Total Stock
              </CardTitle>
              <FishIcon className="text-emerald-300" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
              <CardTitle>
                Total Orders
              </CardTitle>
              <ShoppingBasket className="text-rose-400" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
          <Card>
            <CardHeader className='flex flex-row content-center items-center gap-2 pb-5'>
              <CardTitle>Recent Transactions</CardTitle>
              <ArrowRightLeft className="text-lime-600"/>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
                <p>Purchased Product</p>
                <p>Sold Product</p>
                <p>Purchased Product</p>
                <p>Sold Product</p>
                <p>Sold Product</p>
                <p>Sold Product</p>

            </CardContent>
          </Card>
        </div> 

        <div className="pt-4">
          <Card>
            <CardHeader className="items-center font-bold text-3xl"> 
              <CardTitle> Inventory Summary </CardTitle>
            </CardHeader>

            <CardContent>
            
            <div className="flex gap-4">
              {/* On Hand Stocks Card */}
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>On Hand Stocks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Details about the stocks available on hand.</p>
                </CardContent>
              </Card>

              {/* To be Received Card */}
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>To be Received</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Details about the stocks to be received.</p>
                </CardContent>
                </Card>
            </div>
          </CardContent>
          </Card>
        </div>
  </TabsContent>

  
  <TabsContent value="password">
  <div className="col-span-2"> <Chart/></div>
  </TabsContent>
</Tabs>








       

      </>
    );
  }

