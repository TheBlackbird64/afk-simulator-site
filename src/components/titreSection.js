import './styles/titreSection.css'

function TitreSection ({col, txt}) {

	return (
		<>
			<h2 className={`titreSection-h2`}>{txt}</h2>
			<hr className={`titreSection-line line-${col}`}></hr>
		</>
	);
}

export default TitreSection;