interface FinanceHeaderProps {
  title: string;
  description: string;
}

export default function FinanceHeader({
  title,
  description,
}: FinanceHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-5xl font-bold text-yellow-500">
        {title}
      </h1>

      <p className="mt-3 text-xl text-gray-400">
        {description}
      </p>
    </div>
  );
}