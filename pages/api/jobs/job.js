import JOBS from '../../../data/jobs.json'
const getJobById = async id => JOBS.find(job => job.id === id)

export default async (req, res) => {
	const { jobId } = req.query
	const job = await getJobById(jobId)
	res.status(200).json(job)
}
