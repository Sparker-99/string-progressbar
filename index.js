const splitBar = (total, current, size = 40, line = '▬', slider = '🔘') => {
	if (!total) throw new Error('Total value is either not provided or invalid');
	if (!current && current !== 0) throw new Error('Current value is either not provided or invalid');
	if (isNaN(total)) throw new Error('Total value is not an integer');
	if (isNaN(current)) throw new Error('Current value is not an integer');
	if (isNaN(size)) throw new Error('Size is not an integer');
	if (current > total) {
		const bar = line.repeat(size + 2);
		const percentage = (current / total) * 100;
		return [bar, percentage];
	} else {
		const percentage = current / total;
		const progress = Math.round((size * percentage));
		const emptyProgress = size - progress;
		const progressText = line.repeat(progress).replace(/.$/, slider);
		const emptyProgressText = line.repeat(emptyProgress);
		const bar = progressText + emptyProgressText;
		const calculated = percentage * 100;
		return [bar, calculated];
	}
};

const filledBar = (total, current, size = 40, line = '□', slider = '■') => {
	if (!total) throw new Error('Total value is either not provided or invalid');
	if (!current && current !== 0) throw new Error('Current value is either not provided or invalid');
	if (isNaN(total)) throw new Error('Total value is not an integer');
	if (isNaN(current)) throw new Error('Current value is not an integer');
	if (isNaN(size)) throw new Error('Size is not an integer');
	if (current > total) {
		const bar = slider.repeat(size + 2);
		const percentage = (current / total) * 100;
		return [bar, percentage];
	} else {
		const percentage = current / total;
		const progress = Math.round((size * percentage));
		const emptyProgress = size - progress;
		const progressText = slider.repeat(progress);
		const emptyProgressText = line.repeat(emptyProgress);
		const bar = progressText + emptyProgressText;
		const calculated = percentage * 100;
		return [bar, calculated];
	}
};

module.exports = {
	splitBar,
	filledBar
};