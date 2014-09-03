var EndRequest = module.exports = function(appStatus, protocolStatus) {
	this.appStatus = appStatus || 0;
	this.protocolStatus = protocolStatus || 0;

	this.getSize = function() {
		return 8;
	};

	this.write = function(buffer) {
		buffer.writeUInt32BE(this.appStatus, 0);
		buffer[4] = this.protocolStatus;
	};

	this.read = function(buffer) {
		this.appStatus = buffer.readUInt32BE(0);
		this.protocolStatus = buffer[4];
	};
};
EndRequest.prototype.TYPE = EndRequest.TYPE = 3;

EndRequest.protocolStatus = {
	REQUEST_COMPLETE: 0,
	CANT_MPX_CONN: 1,
	OVERLOADED: 2,
	UNKNOWN_ROLE: 3
};