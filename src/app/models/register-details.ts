export interface RegisterDetails {
  id: string;                      // Item ID (Unique)
  itemName: string;                // Item Name
  category: 'Electronics' |        // Category
            'Furniture' | 
            'Clothing' | 
            'Tools' | 
            'Miscellaneous';
  quantity: number;                // Quantity
  price: number;                   // Price
  supplierName: string;            // Supplier Name
  stockStatus: 'In Stock' |        // Stock Status
               'Low Stock' | 
               'Out of Stock';
  featuredItem: 'Yes' | 'No';      // Featured Item
  specialNote?: string;            // Special Note (optional)
}