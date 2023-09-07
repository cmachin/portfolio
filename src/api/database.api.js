import data from "../data/database.json";

export function getProjects() {
	return data.projects;
}

export function getResearch() {
	return data.research;
}

export function getWork() {
	return data.work;
}

export function getCertifications() {
	return data.certifications;
}
