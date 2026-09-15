import { Badge } from "@/components/ui/badge";

export function CategoryPage () {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="dash-card border border-green-50 dark:border-green-950 rounded-xl border-b-4 p-4">
                    <div className="dash-card-header flex justify-end">
                        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"> Total </Badge>
                    </div>
                    <div className="dash-card-content">
                        <p className="text-4xl dark:text-white text-black font-bold"> 50 </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;