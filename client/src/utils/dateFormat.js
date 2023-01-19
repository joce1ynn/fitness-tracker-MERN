export const formatDate = (date) => {
    const options = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
    }
    return (new Date(date)).toLocaleDateString("en-US", options);
} 