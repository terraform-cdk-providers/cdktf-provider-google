// https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfunctionsFunctionConfig extends cdktf.TerraformMetaArguments {
  /** Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. */
  readonly availableMemoryMb?: number;
  /**  A set of key/value environment variable pairs available during build time. */
  readonly buildEnvironmentVariables?: { [key: string]: string };
  /** Description of the function. */
  readonly description?: string;
  /** Name of the function that will be executed when the Google Cloud Function is triggered. */
  readonly entryPoint?: string;
  /** A set of key/value environment variable pairs to assign to the function. */
  readonly environmentVariables?: { [key: string]: string };
  /** URL which triggers function execution. Returned only if trigger_http is used. */
  readonly httpsTriggerUrl?: string;
  /** String value that controls what traffic can reach the function. Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function. */
  readonly ingressSettings?: string;
  /** A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. */
  readonly labels?: { [key: string]: string };
  /** The limit on the maximum number of function instances that may coexist at a given time. */
  readonly maxInstances?: number;
  /** A user-defined name of the function. Function names must be unique globally. */
  readonly name: string;
  /** Project of the function. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** Region of function. Currently can be only "us-central1". If it is not provided, the provider region is used. */
  readonly region?: string;
  /** The runtime in which the function is going to run. Eg. "nodejs8", "nodejs10", "python37", "go111". */
  readonly runtime: string;
  /**  If provided, the self-provided service account to run the function with. */
  readonly serviceAccountEmail?: string;
  /** The GCS bucket containing the zip archive which contains the function. */
  readonly sourceArchiveBucket?: string;
  /** The source archive object (file) in archive bucket. */
  readonly sourceArchiveObject?: string;
  /** Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. */
  readonly timeout?: number;
  /** Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic. */
  readonly triggerHttp?: boolean;
  /** The VPC Network Connector that this cloud function can connect to. It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/*\/locations/*\/connectors/*. */
  readonly vpcConnector?: string;
  /** The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value. */
  readonly vpcConnectorEgressSettings?: string;
  /** event_trigger block */
  readonly eventTrigger?: CloudfunctionsFunctionEventTrigger[];
  /** source_repository block */
  readonly sourceRepository?: CloudfunctionsFunctionSourceRepository[];
  /** timeouts block */
  readonly timeouts?: CloudfunctionsFunctionTimeouts;
}
export interface CloudfunctionsFunctionEventTriggerFailurePolicy {
  /** Whether the function should be retried on failure. Defaults to false. */
  readonly retry: boolean;
}

function cloudfunctionsFunctionEventTriggerFailurePolicyToTerraform(struct?: CloudfunctionsFunctionEventTriggerFailurePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retry: cdktf.booleanToTerraform(struct!.retry),
  }
}

export interface CloudfunctionsFunctionEventTrigger {
  /** The type of event to observe. For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers. */
  readonly eventType: string;
  /** The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic" */
  readonly resource: string;
  /** failure_policy block */
  readonly failurePolicy?: CloudfunctionsFunctionEventTriggerFailurePolicy[];
}

function cloudfunctionsFunctionEventTriggerToTerraform(struct?: CloudfunctionsFunctionEventTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    resource: cdktf.stringToTerraform(struct!.resource),
    failure_policy: cdktf.listMapper(cloudfunctionsFunctionEventTriggerFailurePolicyToTerraform)(struct!.failurePolicy),
  }
}

export interface CloudfunctionsFunctionSourceRepository {
  /** The URL pointing to the hosted repository where the function is defined. */
  readonly url: string;
}

function cloudfunctionsFunctionSourceRepositoryToTerraform(struct?: CloudfunctionsFunctionSourceRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface CloudfunctionsFunctionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function cloudfunctionsFunctionTimeoutsToTerraform(struct?: CloudfunctionsFunctionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudfunctionsFunction extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudfunctionsFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions_function',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availableMemoryMb = config.availableMemoryMb;
    this._buildEnvironmentVariables = config.buildEnvironmentVariables;
    this._description = config.description;
    this._entryPoint = config.entryPoint;
    this._environmentVariables = config.environmentVariables;
    this._httpsTriggerUrl = config.httpsTriggerUrl;
    this._ingressSettings = config.ingressSettings;
    this._labels = config.labels;
    this._maxInstances = config.maxInstances;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._runtime = config.runtime;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._sourceArchiveBucket = config.sourceArchiveBucket;
    this._sourceArchiveObject = config.sourceArchiveObject;
    this._timeout = config.timeout;
    this._triggerHttp = config.triggerHttp;
    this._vpcConnector = config.vpcConnector;
    this._vpcConnectorEgressSettings = config.vpcConnectorEgressSettings;
    this._eventTrigger = config.eventTrigger;
    this._sourceRepository = config.sourceRepository;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_memory_mb - computed: false, optional: true, required: false
  private _availableMemoryMb?: number;
  public get availableMemoryMb() {
    return this.getNumberAttribute('available_memory_mb');
  }
  public set availableMemoryMb(value: number ) {
    this._availableMemoryMb = value;
  }
  public resetAvailableMemoryMb() {
    this._availableMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableMemoryMbInput() {
    return this._availableMemoryMb
  }

  // build_environment_variables - computed: false, optional: true, required: false
  private _buildEnvironmentVariables?: { [key: string]: string };
  public get buildEnvironmentVariables() {
    return this.interpolationForAttribute('build_environment_variables') as any;
  }
  public set buildEnvironmentVariables(value: { [key: string]: string } ) {
    this._buildEnvironmentVariables = value;
  }
  public resetBuildEnvironmentVariables() {
    this._buildEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildEnvironmentVariablesInput() {
    return this._buildEnvironmentVariables
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string;
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string ) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string };
  public get environmentVariables() {
    return this.interpolationForAttribute('environment_variables') as any;
  }
  public set environmentVariables(value: { [key: string]: string } ) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables
  }

  // https_trigger_url - computed: true, optional: true, required: false
  private _httpsTriggerUrl?: string;
  public get httpsTriggerUrl() {
    return this.getStringAttribute('https_trigger_url');
  }
  public set httpsTriggerUrl(value: string) {
    this._httpsTriggerUrl = value;
  }
  public resetHttpsTriggerUrl() {
    this._httpsTriggerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsTriggerUrlInput() {
    return this._httpsTriggerUrl
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_settings - computed: false, optional: true, required: false
  private _ingressSettings?: string;
  public get ingressSettings() {
    return this.getStringAttribute('ingress_settings');
  }
  public set ingressSettings(value: string ) {
    this._ingressSettings = value;
  }
  public resetIngressSettings() {
    this._ingressSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSettingsInput() {
    return this._ingressSettings
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number;
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number ) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime: string;
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime
  }

  // service_account_email - computed: true, optional: true, required: false
  private _serviceAccountEmail?: string;
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail
  }

  // source_archive_bucket - computed: false, optional: true, required: false
  private _sourceArchiveBucket?: string;
  public get sourceArchiveBucket() {
    return this.getStringAttribute('source_archive_bucket');
  }
  public set sourceArchiveBucket(value: string ) {
    this._sourceArchiveBucket = value;
  }
  public resetSourceArchiveBucket() {
    this._sourceArchiveBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveBucketInput() {
    return this._sourceArchiveBucket
  }

  // source_archive_object - computed: false, optional: true, required: false
  private _sourceArchiveObject?: string;
  public get sourceArchiveObject() {
    return this.getStringAttribute('source_archive_object');
  }
  public set sourceArchiveObject(value: string ) {
    this._sourceArchiveObject = value;
  }
  public resetSourceArchiveObject() {
    this._sourceArchiveObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveObjectInput() {
    return this._sourceArchiveObject
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // trigger_http - computed: false, optional: true, required: false
  private _triggerHttp?: boolean;
  public get triggerHttp() {
    return this.getBooleanAttribute('trigger_http');
  }
  public set triggerHttp(value: boolean ) {
    this._triggerHttp = value;
  }
  public resetTriggerHttp() {
    this._triggerHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerHttpInput() {
    return this._triggerHttp
  }

  // vpc_connector - computed: false, optional: true, required: false
  private _vpcConnector?: string;
  public get vpcConnector() {
    return this.getStringAttribute('vpc_connector');
  }
  public set vpcConnector(value: string ) {
    this._vpcConnector = value;
  }
  public resetVpcConnector() {
    this._vpcConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorInput() {
    return this._vpcConnector
  }

  // vpc_connector_egress_settings - computed: true, optional: true, required: false
  private _vpcConnectorEgressSettings?: string;
  public get vpcConnectorEgressSettings() {
    return this.getStringAttribute('vpc_connector_egress_settings');
  }
  public set vpcConnectorEgressSettings(value: string) {
    this._vpcConnectorEgressSettings = value;
  }
  public resetVpcConnectorEgressSettings() {
    this._vpcConnectorEgressSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorEgressSettingsInput() {
    return this._vpcConnectorEgressSettings
  }

  // event_trigger - computed: false, optional: true, required: false
  private _eventTrigger?: CloudfunctionsFunctionEventTrigger[];
  public get eventTrigger() {
    return this.interpolationForAttribute('event_trigger') as any;
  }
  public set eventTrigger(value: CloudfunctionsFunctionEventTrigger[] ) {
    this._eventTrigger = value;
  }
  public resetEventTrigger() {
    this._eventTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerInput() {
    return this._eventTrigger
  }

  // source_repository - computed: false, optional: true, required: false
  private _sourceRepository?: CloudfunctionsFunctionSourceRepository[];
  public get sourceRepository() {
    return this.interpolationForAttribute('source_repository') as any;
  }
  public set sourceRepository(value: CloudfunctionsFunctionSourceRepository[] ) {
    this._sourceRepository = value;
  }
  public resetSourceRepository() {
    this._sourceRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRepositoryInput() {
    return this._sourceRepository
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudfunctionsFunctionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudfunctionsFunctionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      available_memory_mb: cdktf.numberToTerraform(this._availableMemoryMb),
      build_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._buildEnvironmentVariables),
      description: cdktf.stringToTerraform(this._description),
      entry_point: cdktf.stringToTerraform(this._entryPoint),
      environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
      https_trigger_url: cdktf.stringToTerraform(this._httpsTriggerUrl),
      ingress_settings: cdktf.stringToTerraform(this._ingressSettings),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      max_instances: cdktf.numberToTerraform(this._maxInstances),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      runtime: cdktf.stringToTerraform(this._runtime),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      source_archive_bucket: cdktf.stringToTerraform(this._sourceArchiveBucket),
      source_archive_object: cdktf.stringToTerraform(this._sourceArchiveObject),
      timeout: cdktf.numberToTerraform(this._timeout),
      trigger_http: cdktf.booleanToTerraform(this._triggerHttp),
      vpc_connector: cdktf.stringToTerraform(this._vpcConnector),
      vpc_connector_egress_settings: cdktf.stringToTerraform(this._vpcConnectorEgressSettings),
      event_trigger: cdktf.listMapper(cloudfunctionsFunctionEventTriggerToTerraform)(this._eventTrigger),
      source_repository: cdktf.listMapper(cloudfunctionsFunctionSourceRepositoryToTerraform)(this._sourceRepository),
      timeouts: cloudfunctionsFunctionTimeoutsToTerraform(this._timeouts),
    };
  }
}
