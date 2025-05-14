'use client';

export type TabContentProps = {
    title : string

}

export const STab = ({ items }: { items: TabContentProps[] }) => {
    return (
        <div className="absolute top-full mt-2 left-0 bg-white border rounded shadow-lg z-50 p-4">
            {items.map((item) => (
                <div key={item.title} className="p-1 hover:font-semibold">
                    {item.title}
                </div>
            ))}
        </div>
    );
};