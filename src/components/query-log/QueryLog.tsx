import styles from "./QueryLog.module.scss";

type Props = {
	queryCount: number;
	totalTime: number;
};

const QueryLog = ({ queryCount, totalTime }: Props) => {
	return (
		<div className={styles.root}>
			<div>Query count: {queryCount}</div>
			<div>Total time: {totalTime}</div>
		</div>
	);
};

export default QueryLog;
