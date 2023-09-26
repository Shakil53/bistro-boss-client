
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md: w-3/12 mx-auto text-center mb-7">
            <p className="text-orange-600">--- {subHeading} ---</p>
            <h3 className="text-2xl border-y-4 py-2 uppercase font-serif">{heading}</h3>
        </div>
    );
};

export default SectionTitle;