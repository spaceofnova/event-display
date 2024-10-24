import moment from "moment";

export default function DateDisplay({
  begins,
  ends,
}: {
  begins: string;
  ends?: string;
}) {
  return (
    <div className="flex rounded-2xl p-1 gap-2">
      {ends && (
        <div className="flex flex-col items-center gap-2">
          <p className="border px-2 rounded-md">
            {moment(begins).format("h:mm a")}
          </p>
          <p className="border px-2 rounded-md">
            {moment(ends).format("h:mm a")}
          </p>
        </div>
      )}
    </div>
  );
}
