import CompanyDetail from "@/components/CompanyDetail";

export default function BrandDetail({ params }) {
  const { brand } = params;
  return (
    <div>
      <CompanyDetail id={brand} />
    </div>
  );
}
