export const goUp = async () => {
    try {
        process.chdir("..");
    } catch (error) {
        console.log("Operation failed");
    }
};