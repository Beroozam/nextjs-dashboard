import {InvoicesTableSkeleton} from "@/app/ui/skeletons";

export default async function Loading() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return <InvoicesTableSkeleton />
}