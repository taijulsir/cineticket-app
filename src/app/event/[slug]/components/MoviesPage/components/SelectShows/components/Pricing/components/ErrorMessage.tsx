export function ErrorMessage({ error }: { error?: string }) {
    return error ? <p className="text-red-600 text-[12px]">{error}</p> : null;
}
