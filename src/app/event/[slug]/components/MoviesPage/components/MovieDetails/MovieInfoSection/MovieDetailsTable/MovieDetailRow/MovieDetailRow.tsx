function MovieDetailRow({
    label,
    value,
}: {
    label: string;
    value?: string | string[];
}) {
    const display = Array.isArray(value) ? value.join(", ") : value;

    return (
        <tr>
            <td className="align-top font-bold">{label}</td>
            <td className="px-5 align-top">:</td>
            <td className="align-top">
                <p>{display}</p>
            </td>
        </tr>
    );
}

export default MovieDetailRow


