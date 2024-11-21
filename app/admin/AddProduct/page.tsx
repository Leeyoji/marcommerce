import { Button } from "@/components/ui/button";
import RightMenu from "../components/right";
import DashboardLayout from "../dashboard/layout";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigLeftIcon, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Products from "../products/page";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function AddProduct () {
    return (
        
        <div>
            <RightMenu />
                <div className="flex gap-4 pl-7 pb-5">
                <Link href={'./products'}>
                    <Button> 
                        <ChevronLeft/>
                    </Button>
                </Link>
                <p className="text-3xl font-semibold">Add Products</p>
                </div>
                <div className="pl-5 pr-5 pb-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Product Details</CardTitle>
                        <CardDescription>Enter Product Details Here</CardDescription>
                        <Separator/>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <form className="w-[70rem] text-lg">
                            <Label className="text-lg">Product Name</Label>
                            <Input className="mb-3" placeholder="Enter product name here"/>
                            <Label className="text-lg">Description</Label>
                            <Input className="h-20 mb-3" placeholder="Enter product description here"/>
                            <Label className="text-lg">Prices</Label>
                            <Card className="mb-3">
                            <div className="flex flex-grid cols-3 gap-1 mt-3 p-5">
                                <Label className="text-lg pl-10">Small</Label>
                                <Input/>
                                <Label className="text-lg pl-10">Medium</Label>
                                <Input/>
                                <Label className="text-lg pl-10">Breeder</Label>
                                <Input className="mr-10"/>
                            </div>
                            </Card>
                            <Label className="text-lg">Stocks</Label>
                            <Card className="mb-3">
                            <div className="flex flex-grid cols-3 gap-1 mt-3 p-5">
                                <Label className="text-lg pl-10">Small</Label>
                                <Input/>
                                <Label className="text-lg pl-10">Medium</Label>
                                <Input/>
                                <Label className="text-lg pl-10">Breeder</Label>
                                <Input className="mr-10"/>
                            </div>
                            </Card>
                            <Label htmlFor="picture" className="text-lg">Picture</Label>
                            <Input id="picture" type="file" />
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-row-reverse">
                        <Button className="mt-4 mr-5">Done</Button>

                    </CardFooter>
                </Card> 

                </div>
        </div>
    )
}