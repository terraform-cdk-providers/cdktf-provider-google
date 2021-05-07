// https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocWorkflowTemplateConfig extends cdktf.TerraformMetaArguments {
  readonly labels?: { [key: string]: string };
  readonly location: string;
  readonly name: string;
  readonly project?: string;
  readonly version?: number;
  /** jobs block */
  readonly jobs: DataprocWorkflowTemplateJobs[];
  /** parameters block */
  readonly parameters?: DataprocWorkflowTemplateParameters[];
  /** placement block */
  readonly placement: DataprocWorkflowTemplatePlacement[];
  /** timeouts block */
  readonly timeouts?: DataprocWorkflowTemplateTimeouts;
}
export interface DataprocWorkflowTemplateJobsHadoopJobLoggingConfig {
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsHadoopJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsHadoopJob {
  readonly archiveUris?: string[];
  readonly args?: string[];
  readonly fileUris?: string[];
  readonly jarFileUris?: string[];
  readonly mainClass?: string;
  readonly mainJarFileUri?: string;
  readonly properties?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig[];
}

function dataprocWorkflowTemplateJobsHadoopJobToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsHadoopJobLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocWorkflowTemplateJobsHiveJobQueryList {
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsHiveJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsHiveJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export interface DataprocWorkflowTemplateJobsHiveJob {
  readonly continueOnFailure?: boolean;
  readonly jarFileUris?: string[];
  readonly properties?: { [key: string]: string };
  readonly queryFileUri?: string;
  readonly scriptVariables?: { [key: string]: string };
  /** query_list block */
  readonly queryList?: DataprocWorkflowTemplateJobsHiveJobQueryList[];
}

function dataprocWorkflowTemplateJobsHiveJobToTerraform(struct?: DataprocWorkflowTemplateJobsHiveJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    query_list: cdktf.listMapper(dataprocWorkflowTemplateJobsHiveJobQueryListToTerraform)(struct!.queryList),
  }
}

export interface DataprocWorkflowTemplateJobsPigJobLoggingConfig {
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsPigJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPigJobQueryList {
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsPigJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export interface DataprocWorkflowTemplateJobsPigJob {
  readonly continueOnFailure?: boolean;
  readonly jarFileUris?: string[];
  readonly properties?: { [key: string]: string };
  readonly queryFileUri?: string;
  readonly scriptVariables?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPigJobLoggingConfig[];
  /** query_list block */
  readonly queryList?: DataprocWorkflowTemplateJobsPigJobQueryList[];
}

function dataprocWorkflowTemplateJobsPigJobToTerraform(struct?: DataprocWorkflowTemplateJobsPigJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsPigJobLoggingConfigToTerraform)(struct!.loggingConfig),
    query_list: cdktf.listMapper(dataprocWorkflowTemplateJobsPigJobQueryListToTerraform)(struct!.queryList),
  }
}

export interface DataprocWorkflowTemplateJobsPrestoJobLoggingConfig {
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsPrestoJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPrestoJobQueryList {
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsPrestoJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export interface DataprocWorkflowTemplateJobsPrestoJob {
  readonly clientTags?: string[];
  readonly continueOnFailure?: boolean;
  readonly outputFormat?: string;
  readonly properties?: { [key: string]: string };
  readonly queryFileUri?: string;
  /** logging_config block */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig[];
  /** query_list block */
  readonly queryList?: DataprocWorkflowTemplateJobsPrestoJobQueryList[];
}

function dataprocWorkflowTemplateJobsPrestoJobToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clientTags),
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsPrestoJobLoggingConfigToTerraform)(struct!.loggingConfig),
    query_list: cdktf.listMapper(dataprocWorkflowTemplateJobsPrestoJobQueryListToTerraform)(struct!.queryList),
  }
}

export interface DataprocWorkflowTemplateJobsPysparkJobLoggingConfig {
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsPysparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPysparkJob {
  readonly archiveUris?: string[];
  readonly args?: string[];
  readonly fileUris?: string[];
  readonly jarFileUris?: string[];
  readonly mainPythonFileUri: string;
  readonly properties?: { [key: string]: string };
  readonly pythonFileUris?: string[];
  /** logging_config block */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig[];
}

function dataprocWorkflowTemplateJobsPysparkJobToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_python_file_uri: cdktf.stringToTerraform(struct!.mainPythonFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    python_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pythonFileUris),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsPysparkJobLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocWorkflowTemplateJobsScheduling {
  readonly maxFailuresPerHour?: number;
  readonly maxFailuresTotal?: number;
}

function dataprocWorkflowTemplateJobsSchedulingToTerraform(struct?: DataprocWorkflowTemplateJobsScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_failures_per_hour: cdktf.numberToTerraform(struct!.maxFailuresPerHour),
    max_failures_total: cdktf.numberToTerraform(struct!.maxFailuresTotal),
  }
}

export interface DataprocWorkflowTemplateJobsSparkJobLoggingConfig {
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsSparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkJob {
  readonly archiveUris?: string[];
  readonly args?: string[];
  readonly fileUris?: string[];
  readonly jarFileUris?: string[];
  readonly mainClass?: string;
  readonly mainJarFileUri?: string;
  readonly properties?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkJobLoggingConfig[];
}

function dataprocWorkflowTemplateJobsSparkJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkJobLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocWorkflowTemplateJobsSparkRJobLoggingConfig {
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsSparkRJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkRJob {
  readonly archiveUris?: string[];
  readonly args?: string[];
  readonly fileUris?: string[];
  readonly mainRFileUri: string;
  readonly properties?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig[];
}

function dataprocWorkflowTemplateJobsSparkRJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    main_r_file_uri: cdktf.stringToTerraform(struct!.mainRFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkRJobLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig {
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkSqlJobQueryList {
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsSparkSqlJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export interface DataprocWorkflowTemplateJobsSparkSqlJob {
  readonly jarFileUris?: string[];
  readonly properties?: { [key: string]: string };
  readonly queryFileUri?: string;
  readonly scriptVariables?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig[];
  /** query_list block */
  readonly queryList?: DataprocWorkflowTemplateJobsSparkSqlJobQueryList[];
}

function dataprocWorkflowTemplateJobsSparkSqlJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigToTerraform)(struct!.loggingConfig),
    query_list: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkSqlJobQueryListToTerraform)(struct!.queryList),
  }
}

export interface DataprocWorkflowTemplateJobs {
  readonly labels?: { [key: string]: string };
  readonly prerequisiteStepIds?: string[];
  readonly stepId: string;
  /** hadoop_job block */
  readonly hadoopJob?: DataprocWorkflowTemplateJobsHadoopJob[];
  /** hive_job block */
  readonly hiveJob?: DataprocWorkflowTemplateJobsHiveJob[];
  /** pig_job block */
  readonly pigJob?: DataprocWorkflowTemplateJobsPigJob[];
  /** presto_job block */
  readonly prestoJob?: DataprocWorkflowTemplateJobsPrestoJob[];
  /** pyspark_job block */
  readonly pysparkJob?: DataprocWorkflowTemplateJobsPysparkJob[];
  /** scheduling block */
  readonly scheduling?: DataprocWorkflowTemplateJobsScheduling[];
  /** spark_job block */
  readonly sparkJob?: DataprocWorkflowTemplateJobsSparkJob[];
  /** spark_r_job block */
  readonly sparkRJob?: DataprocWorkflowTemplateJobsSparkRJob[];
  /** spark_sql_job block */
  readonly sparkSqlJob?: DataprocWorkflowTemplateJobsSparkSqlJob[];
}

function dataprocWorkflowTemplateJobsToTerraform(struct?: DataprocWorkflowTemplateJobs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    prerequisite_step_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prerequisiteStepIds),
    step_id: cdktf.stringToTerraform(struct!.stepId),
    hadoop_job: cdktf.listMapper(dataprocWorkflowTemplateJobsHadoopJobToTerraform)(struct!.hadoopJob),
    hive_job: cdktf.listMapper(dataprocWorkflowTemplateJobsHiveJobToTerraform)(struct!.hiveJob),
    pig_job: cdktf.listMapper(dataprocWorkflowTemplateJobsPigJobToTerraform)(struct!.pigJob),
    presto_job: cdktf.listMapper(dataprocWorkflowTemplateJobsPrestoJobToTerraform)(struct!.prestoJob),
    pyspark_job: cdktf.listMapper(dataprocWorkflowTemplateJobsPysparkJobToTerraform)(struct!.pysparkJob),
    scheduling: cdktf.listMapper(dataprocWorkflowTemplateJobsSchedulingToTerraform)(struct!.scheduling),
    spark_job: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkJobToTerraform)(struct!.sparkJob),
    spark_r_job: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkRJobToTerraform)(struct!.sparkRJob),
    spark_sql_job: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkSqlJobToTerraform)(struct!.sparkSqlJob),
  }
}

export interface DataprocWorkflowTemplateParametersValidationRegex {
  readonly regexes: string[];
}

function dataprocWorkflowTemplateParametersValidationRegexToTerraform(struct?: DataprocWorkflowTemplateParametersValidationRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    regexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regexes),
  }
}

export interface DataprocWorkflowTemplateParametersValidationValues {
  readonly values: string[];
}

function dataprocWorkflowTemplateParametersValidationValuesToTerraform(struct?: DataprocWorkflowTemplateParametersValidationValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataprocWorkflowTemplateParametersValidation {
  /** regex block */
  readonly regex?: DataprocWorkflowTemplateParametersValidationRegex[];
  /** values block */
  readonly values?: DataprocWorkflowTemplateParametersValidationValues[];
}

function dataprocWorkflowTemplateParametersValidationToTerraform(struct?: DataprocWorkflowTemplateParametersValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    regex: cdktf.listMapper(dataprocWorkflowTemplateParametersValidationRegexToTerraform)(struct!.regex),
    values: cdktf.listMapper(dataprocWorkflowTemplateParametersValidationValuesToTerraform)(struct!.values),
  }
}

export interface DataprocWorkflowTemplateParameters {
  readonly description?: string;
  readonly fields: string[];
  readonly name: string;
  /** validation block */
  readonly validation?: DataprocWorkflowTemplateParametersValidation[];
}

function dataprocWorkflowTemplateParametersToTerraform(struct?: DataprocWorkflowTemplateParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fields),
    name: cdktf.stringToTerraform(struct!.name),
    validation: cdktf.listMapper(dataprocWorkflowTemplateParametersValidationToTerraform)(struct!.validation),
  }
}

export interface DataprocWorkflowTemplatePlacementClusterSelector {
  readonly clusterLabels: { [key: string]: string };
  readonly zone?: string;
}

function dataprocWorkflowTemplatePlacementClusterSelectorToTerraform(struct?: DataprocWorkflowTemplatePlacementClusterSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.clusterLabels),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig {
  readonly policy?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig {
  readonly gcePdKmsKeyName?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gce_pd_kms_key_name: cdktf.stringToTerraform(struct!.gcePdKmsKeyName),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig {
  readonly enableHttpPortAccess?: boolean;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_http_port_access: cdktf.booleanToTerraform(struct!.enableHttpPortAccess),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity {
  readonly nodeGroup: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity {
  readonly consumeReservationType?: string;
  readonly key?: string;
  readonly values?: string[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig {
  readonly internalIpOnly?: boolean;
  readonly metadata?: { [key: string]: string };
  readonly network?: string;
  readonly privateIpv6GoogleAccess?: string;
  readonly serviceAccount?: string;
  readonly serviceAccountScopes?: string[];
  readonly subnetwork?: string;
  readonly tags?: string[];
  readonly zone?: string;
  /** node_group_affinity block */
  readonly nodeGroupAffinity?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity[];
  /** reservation_affinity block */
  readonly reservationAffinity?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    internal_ip_only: cdktf.booleanToTerraform(struct!.internalIpOnly),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    network: cdktf.stringToTerraform(struct!.network),
    private_ipv6_google_access: cdktf.stringToTerraform(struct!.privateIpv6GoogleAccess),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceAccountScopes),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
    node_group_affinity: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityToTerraform)(struct!.nodeGroupAffinity),
    reservation_affinity: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityToTerraform)(struct!.reservationAffinity),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions {
  readonly executableFile?: string;
  readonly executionTimeout?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActionsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    executable_file: cdktf.stringToTerraform(struct!.executableFile),
    execution_timeout: cdktf.stringToTerraform(struct!.executionTimeout),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig {
  readonly autoDeleteTime?: string;
  readonly autoDeleteTtl?: string;
  readonly idleDeleteTtl?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_delete_time: cdktf.stringToTerraform(struct!.autoDeleteTime),
    auto_delete_ttl: cdktf.stringToTerraform(struct!.autoDeleteTtl),
    idle_delete_ttl: cdktf.stringToTerraform(struct!.idleDeleteTtl),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators {
  readonly acceleratorCount?: number;
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig {
  readonly bootDiskSizeGb?: number;
  readonly bootDiskType?: string;
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig {
  readonly image?: string;
  readonly machineType?: string;
  readonly minCpuPlatform?: string;
  readonly numInstances?: number;
  readonly preemptibility?: string;
  /** accelerators block */
  readonly accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators[];
  /** disk_config block */
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators {
  readonly acceleratorCount?: number;
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig {
  readonly bootDiskSizeGb?: number;
  readonly bootDiskType?: string;
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig {
  readonly image?: string;
  readonly machineType?: string;
  readonly minCpuPlatform?: string;
  readonly numInstances?: number;
  readonly preemptibility?: string;
  /** accelerators block */
  readonly accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators[];
  /** disk_config block */
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig {
  readonly crossRealmTrustAdminServer?: string;
  readonly crossRealmTrustKdc?: string;
  readonly crossRealmTrustRealm?: string;
  readonly crossRealmTrustSharedPassword?: string;
  readonly enableKerberos?: boolean;
  readonly kdcDbKey?: string;
  readonly keyPassword?: string;
  readonly keystore?: string;
  readonly keystorePassword?: string;
  readonly kmsKey?: string;
  readonly realm?: string;
  readonly rootPrincipalPassword?: string;
  readonly tgtLifetimeHours?: number;
  readonly truststore?: string;
  readonly truststorePassword?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cross_realm_trust_admin_server: cdktf.stringToTerraform(struct!.crossRealmTrustAdminServer),
    cross_realm_trust_kdc: cdktf.stringToTerraform(struct!.crossRealmTrustKdc),
    cross_realm_trust_realm: cdktf.stringToTerraform(struct!.crossRealmTrustRealm),
    cross_realm_trust_shared_password: cdktf.stringToTerraform(struct!.crossRealmTrustSharedPassword),
    enable_kerberos: cdktf.booleanToTerraform(struct!.enableKerberos),
    kdc_db_key: cdktf.stringToTerraform(struct!.kdcDbKey),
    key_password: cdktf.stringToTerraform(struct!.keyPassword),
    keystore: cdktf.stringToTerraform(struct!.keystore),
    keystore_password: cdktf.stringToTerraform(struct!.keystorePassword),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    realm: cdktf.stringToTerraform(struct!.realm),
    root_principal_password: cdktf.stringToTerraform(struct!.rootPrincipalPassword),
    tgt_lifetime_hours: cdktf.numberToTerraform(struct!.tgtLifetimeHours),
    truststore: cdktf.stringToTerraform(struct!.truststore),
    truststore_password: cdktf.stringToTerraform(struct!.truststorePassword),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig {
  /** kerberos_config block */
  readonly kerberosConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kerberos_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigToTerraform)(struct!.kerberosConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig {
  readonly imageVersion?: string;
  readonly properties?: { [key: string]: string };
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators {
  readonly acceleratorCount?: number;
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig {
  readonly bootDiskSizeGb?: number;
  readonly bootDiskType?: string;
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig {
  readonly image?: string;
  readonly machineType?: string;
  readonly minCpuPlatform?: string;
  readonly numInstances?: number;
  readonly preemptibility?: string;
  /** accelerators block */
  readonly accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators[];
  /** disk_config block */
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfig {
  readonly stagingBucket?: string;
  readonly tempBucket?: string;
  /** autoscaling_config block */
  readonly autoscalingConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig[];
  /** encryption_config block */
  readonly encryptionConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig[];
  /** endpoint_config block */
  readonly endpointConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig[];
  /** gce_cluster_config block */
  readonly gceClusterConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig[];
  /** initialization_actions block */
  readonly initializationActions?: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions[];
  /** lifecycle_config block */
  readonly lifecycleConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig[];
  /** master_config block */
  readonly masterConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig[];
  /** secondary_worker_config block */
  readonly secondaryWorkerConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig[];
  /** security_config block */
  readonly securityConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig[];
  /** software_config block */
  readonly softwareConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig[];
  /** worker_config block */
  readonly workerConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    temp_bucket: cdktf.stringToTerraform(struct!.tempBucket),
    autoscaling_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigToTerraform)(struct!.autoscalingConfig),
    encryption_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigToTerraform)(struct!.encryptionConfig),
    endpoint_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigToTerraform)(struct!.endpointConfig),
    gce_cluster_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigToTerraform)(struct!.gceClusterConfig),
    initialization_actions: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActionsToTerraform)(struct!.initializationActions),
    lifecycle_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigToTerraform)(struct!.lifecycleConfig),
    master_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigToTerraform)(struct!.masterConfig),
    secondary_worker_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigToTerraform)(struct!.secondaryWorkerConfig),
    security_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigToTerraform)(struct!.securityConfig),
    software_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigToTerraform)(struct!.softwareConfig),
    worker_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigToTerraform)(struct!.workerConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedCluster {
  readonly clusterName: string;
  readonly labels?: { [key: string]: string };
  /** config block */
  readonly config: DataprocWorkflowTemplatePlacementManagedClusterConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigToTerraform)(struct!.config),
  }
}

export interface DataprocWorkflowTemplatePlacement {
  /** cluster_selector block */
  readonly clusterSelector?: DataprocWorkflowTemplatePlacementClusterSelector[];
  /** managed_cluster block */
  readonly managedCluster?: DataprocWorkflowTemplatePlacementManagedCluster[];
}

function dataprocWorkflowTemplatePlacementToTerraform(struct?: DataprocWorkflowTemplatePlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_selector: cdktf.listMapper(dataprocWorkflowTemplatePlacementClusterSelectorToTerraform)(struct!.clusterSelector),
    managed_cluster: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterToTerraform)(struct!.managedCluster),
  }
}

export interface DataprocWorkflowTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function dataprocWorkflowTemplateTimeoutsToTerraform(struct?: DataprocWorkflowTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class DataprocWorkflowTemplate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataprocWorkflowTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_workflow_template',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._version = config.version;
    this._jobs = config.jobs;
    this._parameters = config.parameters;
    this._placement = config.placement;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number;
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // jobs - computed: false, optional: false, required: true
  private _jobs: DataprocWorkflowTemplateJobs[];
  public get jobs() {
    return this.interpolationForAttribute('jobs') as any;
  }
  public set jobs(value: DataprocWorkflowTemplateJobs[]) {
    this._jobs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: DataprocWorkflowTemplateParameters[];
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: DataprocWorkflowTemplateParameters[] ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // placement - computed: false, optional: false, required: true
  private _placement: DataprocWorkflowTemplatePlacement[];
  public get placement() {
    return this.interpolationForAttribute('placement') as any;
  }
  public set placement(value: DataprocWorkflowTemplatePlacement[]) {
    this._placement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocWorkflowTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataprocWorkflowTemplateTimeouts ) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.numberToTerraform(this._version),
      jobs: cdktf.listMapper(dataprocWorkflowTemplateJobsToTerraform)(this._jobs),
      parameters: cdktf.listMapper(dataprocWorkflowTemplateParametersToTerraform)(this._parameters),
      placement: cdktf.listMapper(dataprocWorkflowTemplatePlacementToTerraform)(this._placement),
      timeouts: dataprocWorkflowTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
