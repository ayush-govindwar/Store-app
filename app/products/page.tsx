import ProductsContainer from '@/components/products/ProductsContainer';

async function ProductsPage({ //searchParams contains key-value pairs from the query string of the URL.
  searchParams, //In Client Components: Use useSearchParams
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;