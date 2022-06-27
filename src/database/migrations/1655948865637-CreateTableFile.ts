import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableFile1655948865637 implements MigrationInterface {
    name = 'CreateTableFile1655948865637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "file" ("id" SERIAL NOT NULL, "file" character varying NOT NULL, "type" character varying NOT NULL, "workspace_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "FK_b4974649383ab4efd579981415b" FOREIGN KEY ("workspace_id") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "FK_b4974649383ab4efd579981415b"`);
        await queryRunner.query(`DROP TABLE "file"`);
    }

}
