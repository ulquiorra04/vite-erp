import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Plus, Trash } from "lucide-react";

export function ProductPage() {

    const handleDeleteProduct = () => {
        // Implement the logic to delete the product here
        console.log("Delete product");
    }

    const handleEditProduct = () => {
        // Implement the logic to edit the product here
        console.log("Edit product");
    }

    const handleAddProduct = () => {
        // Implement the logic to add a new product here
        console.log("Add product");
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="dash-card border border-green-50 dark:border-green-950 rounded-xl border-b-4 p-4">
                    <div className="dash-card-header flex justify-end">
                        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Disponible</Badge>
                    </div>
                    <div className="dash-card-content">
                        <p className="text-4xl dark:text-white text-black font-bold"> 50 </p>
                    </div>
                </div>

                <div className="dash-card border border-red-50 dark:border-red-950 rounded-xl border-b-4 p-4">
                    <div className="dash-card-header flex justify-end">
                        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">Disponible</Badge>
                    </div>
                    <div className="dash-card-content">
                        <p className="text-4xl dark:text-white text-black font-bold"> 50 </p>
                    </div>
                </div>

                <div className="dash-card border border-red-50 dark:border-red-950 rounded-xl border-b-4 p-4">
                    <div className="dash-card-header flex justify-end">
                        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">Disponible</Badge>
                    </div>
                    <div className="dash-card-content">
                        <p className="text-4xl dark:text-white text-black font-bold"> 50 </p>
                    </div>
                </div>

                <div className="dash-card border border-green-50 dark:border-green-950 rounded-xl border-b-4 p-4">
                    <div className="dash-card-header flex justify-end">
                        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Disponible</Badge>
                    </div>
                    <div className="dash-card-content">
                        <p className="text-4xl dark:text-white text-black font-bold"> 50 </p>
                    </div>
                </div>

            </div>

            <div className="flex justify-end my-4">
                <Button variant="outline" size="icon" className="my-4" onClick={handleAddProduct}>
                    <Plus className="hover:cursor-pointer"/>
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Prix</TableHead>
                        <TableHead>Categorie</TableHead>
                        <TableHead> Status </TableHead>
                        <TableHead> Quqntite </TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Produit 1</TableCell>
                        <TableCell>200 DH</TableCell>
                        <TableCell>IPTV</TableCell>
                        <TableCell>
                            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Disponible</Badge>
                        </TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>
                            <Button variant="outline" size="icon" className="mr-1" onClick={handleEditProduct}>
                                <Pencil />
                            </Button>
                            <Button variant="destructive" size="icon" onClick={handleDeleteProduct}>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Produit 2</TableCell>
                        <TableCell>250 DH</TableCell>
                        <TableCell>IPTV</TableCell>
                        <TableCell>
                            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Disponible</Badge>
                        </TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default ProductPage;