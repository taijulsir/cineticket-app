function MovieDetailRow({ label, value }) {
    return (
        <tr>
            <td className="align-top font-bold">{label}</td>
            <td className="px-5 align-top">:</td>
            <td className="align-top">
                <p>{value?.join(", ")}</p>
            </td>
        </tr>
    )
}

export default MovieDetailRow


